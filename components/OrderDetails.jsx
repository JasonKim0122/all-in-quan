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
                <h1 className={styles.title}> </h1>
                <div className={styles.item}>
                    <label className={styles.label}> Name </label>
                    <input placeholder="Please enter your name"
                    type="text"
                    className={styles.input}
                    onChange={(e) => setCustomer(e.target.value)}/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}> Your total is ${total} </label>
                    <input placeholder="Please enter a valid phone number"
                    type="text"
                    className={styles.input}
                    onChange={(e) => setphoneNumber(e.target.value)}
                />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}> Address </label>
                    <textarea
                        rows={5}
                        placeholder="Please enter a valid address!"
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