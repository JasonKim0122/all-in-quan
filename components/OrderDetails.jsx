import { useState } from "react";
import styles from "../styles/OrderDetails.module.css";

const OrderDetails = ({ total, createOrder }) => {

const [customer, setCustomer] = useState("");
const [phoneNumber, setphoneNumber] = useState("");
const [address, setAddress] = useState("");

const handleClick = () => {
    createOrder({ customer, phoneNumber, address, total, method: 0 });
};

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>You will pay $100 after delivery</h1>
                <div className={styles.item}>
                    <label className={styles.label}> Name </label>
                    <input placeholder="john"
                    type="text"
                    className={styles.input}
                    onChange={(e) => setCustomer(e.target.value)}/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}> Phone Number </label>
                    <input placeholder="999-999-9999"
                    type="text"
                    className={styles.input}
                    onChange={(e) => setphoneNumber(e.target.value)}
                />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}> Address </label>
                    <textarea
                        rows={5}
                        placeholder="123 Main St"
                        type='text'
                        className={styles.textarea}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button className={styles.button} onClick={handleClick}>Order</button>
            </div>
        </div>
    )
}

export default OrderDetails;