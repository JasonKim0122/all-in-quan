import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Add.module.css';
import { useRouter } from 'next/router';

const Add = ({setClose}) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [prices, setPrices] = useState([]);

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value
        setPrices(currentPrices);
    }

    const handleCreate = async () => {

    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={() => setClose(true)} className={styles.close}>X</span>
                <h1>Add New Food</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Choose an Image</label>
                    <input type='file' onChange={(e) => setFile(e.target.files(0))}/>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input className={styles.input} type='text' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Description</label>
                    <textarea rows={4} type='text' onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Prices</label>
                    <div className={styles.priceContainer}>
                        <input className={`${styles.input} ${styles.inputSm}`}
                        type='number' 
                        placeholder='Small' 
                        onChange={(e) => changePrice(e, 1)} />
                        <input className={`${styles.input} ${styles.inputSm}`}
                        type='number' 
                        placeholder='Medium' 
                        onChange={(e) => changePrice(e, 0)} />
                        <input className={`${styles.input} ${styles.inputSm}`}
                        type='number' 
                        placeholder='Large' 
                        onChange={(e) => changePrice(e, 2)} />
                    </div>
                </div>
                <button className={styles.addBtn} onClick={handleCreate}>Create</button>
            </div>
        </div>
    );
};

export default Add;