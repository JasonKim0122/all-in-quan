import axios from 'axios';
import styles from '../../styles/Orders.module.css';
import Image from "next/legacy/image";

const Order = ({order}) => {


const status = order.status;
const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.preparing;
    if (index - status > 1) return styles.pickup;
};

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                <table className={styles.table}>
                    <thead>
                    <tr className={styles.trTitle}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <span className={styles.id}>{order._id}</span>
                        </td>
                        <td>
                            <span className={styles.name}>{order.customer}</span>
                        </td>
                        <td>
                            <span className={styles.address}>{order.address}</span>
                        </td>
                        <td>
                            <span className={styles.total}>${order.total}</span>
                        </td>
                    </tr>
                    </thead>
                </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src='/img/paid.png' height={30} width={30}  alt='status icon' />
                        <span>Payment</span>
                        <div className={styles.checkIcon}>
                            <Image className={styles.checkedIcon} src='/img/check.png' alt='green check status' height={18} width={18} />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src='/img/cooking.png' height={30} width={30}  alt='status icon' />
                        <span>Preparing</span>
                        <div className={styles.checkIcon}>
                            <Image className={styles.checkedIcon} src='/img/check.png' alt='green check status' height={18} width={18} />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src='/img/tray.png' height={30} width={30}  alt='status icon' />
                        <span>Ready for pickup</span>
                        <div className={styles.checkIcon}>
                            <Image className={styles.checkedIcon} src='/img/check.png' alt='green check status' height={18} width={18} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b> ${order.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b> $0.0
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b> ${order.total}
                    </div>
                    <button disabled className={styles.button}>Paid</button>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
     props: { order: res.data },
    };
   };

export default Order;