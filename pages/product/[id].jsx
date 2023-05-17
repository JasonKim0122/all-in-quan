import { useState } from 'react';
import styles from '../../styles/Product.module.css';
import Image from 'next/image';

const Product = () => {
    const [size, setSize] = useState(0);
    const food = {
        id: 1,
        img: '/img/food-1.JPG',
        name: 'Egg rolls',
        price: [5, 10, 15],
        description: 'Fried vietamesse egg rolls'
    };

    return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={food.img} styles='contain' fill alt='' />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{food.name}</h1>
            <span className={styles.price}>${food.price[size]}</span>
            <p className={styles.description}>{food.description}</p>
            <h3 className={styles.choose}>Please Choose the size</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={() => setSize(0)}>
                    <Image src='/img/size.png' fill alt='' />
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={() => setSize(1)}>
                    <Image src='/img/size.png' fill alt='' />
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={() => setSize(2)}>
                    <Image src='/img/size.png' fill alt='' />
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <div className={styles.add}>
                <input type='number' defaultValue={1} className={styles.quantity}/>
                <button className={styles.button}>Add to Cart!</button>
            </div>
        </div>
    </div>
}

export default Product;