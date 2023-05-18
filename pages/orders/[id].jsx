import styles from '../../styles/Orders.module.css';
import Image from 'next/image';

const Order = () => {


const status = 0;
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
                            <span className={styles.id}>123123</span>
                        </td>
                        <td>
                            <span className={styles.name}>Ed Smith</span>
                        </td>
                        <td>
                            <span className={styles.address}>211 bookworm st</span>
                        </td>
                        <td>
                            <span className={styles.total}>$10</span>
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
                        <b className={styles.totalTextTitle}>Subtotal:</b> $80
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b> $0.0
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b> $80
                    </div>
                    <button disabled className={styles.button}>Paid</button>
                </div>
            </div>
        </div>
    )
}

export default Order;