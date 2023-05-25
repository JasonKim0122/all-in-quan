import styles from '../styles/Cart.module.css';
import Image from "next/legacy/image";

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <thead>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src='/img/food-1.JPG' 
                                layout= 'fill'
                                style={'cover'}
                                alt='' />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Eggrolls</span>
                        </td>
                        <td>
                            <span className={styles.price}>$5</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$10</span>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src='/img/food-1.JPG' 
                                layout='fill'
                                style={'cover'}
                                alt='' />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Eggrolls</span>
                        </td>
                        <td>
                            <span className={styles.price}>$5</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$10</span>
                        </td>
                    </tr>
                    </thead>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b> $80
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b> $0.0
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b> $80
                    </div>
                    <button className={styles.button}>Checkout Now</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;