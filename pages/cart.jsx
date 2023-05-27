import styles from '../styles/Cart.module.css';
import Image from "next/legacy/image";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
} from '@paypal/react-paypal-js';

const Cart = () => {
    const [open, setOpen] = useState(false);
    const amount = '2';
    const currency = 'USD';
    const style = {'layout': 'vertical'};
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const ButtonWrapper = ({ currency, showSpinner }) => {
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type:'resetOptions',
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);

        return (
            <>
              {showSpinner && isPending && <div className="spinner" />}
              <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                  return actions.order
                    .create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: currency,
                            value: amount,
                          },
                        },
                      ],
                    })
                    .then((orderId) => {
                      // Your code here after create the order
                      return orderId;
                    });
                }}
                onApprove={function (data, actions) {
                  return actions.order.capture().then(function (details) {
                    const shipping = details.purchase_units[0].shipping;
                    createOrder({
                      customer: shipping.name.full_name,
                      address: shipping.address.address_line_1,
                      total: cart.total,
                      method: 1,
                    });
                  });
                }}
              />
            </>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {cart.products.map((product) => (
                    <tr className={styles.tr} key={product._id}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src={product.img} 
                                layout= 'fill'
                                objectFit='cover'
                                alt='' />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>{product.title}</span>
                        </td>
                        <td>
                            <span className={styles.price}>{product.price}</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>{product.quantity}</span>
                        </td>
                        <td>
                            <span className={styles.total}> ${product.price * product.quantity} </span>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b> ${cart.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b> $0.0
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b> ${cart.total}
                    </div>
                    {open ? (
                        <div className={styles.paymentMethods}>
                            <button className={styles.payButton}>Cash on Delivery</button>
                            <PayPalScriptProvider
                            options={{
                                "client-id": "test",
                                components: "buttons",
                                currency: "USD",
                                "disable-funding": "credit,card",
                            }}
                    >
                            <ButtonWrapper currency={currency} showSpinner={false} />
                            </PayPalScriptProvider>
                        </div>
                    ) : (
                        <button onClick={() => setOpen(true)} className={styles.button}>Checkout Now</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart;