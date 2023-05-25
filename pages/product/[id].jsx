import { useState } from 'react';
import styles from '../../styles/Product.module.css';
import Image from "next/legacy/image";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

const Product = ({food}) => {
    const [price, setPrice] = useState(food.prices[0]);
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const changePrice = (number) => {
        setPrice(price + number);
    };

    const handleSize = (sizeIndex) => {
        const difference = food.prices[sizeIndex] - food.prices[size];
        setSize(sizeIndex);
        changePrice(difference)
    };

    const handleClick = () => {
        dispatch(addProduct({...food, price, quantity}));
    };

    return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={food.img} styles='contain' layout="fill" alt='' />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{food.title}</h1>
            <span className={styles.price}>${price}</span>
            <p className={styles.description}>{food.description}</p>
            <h3 className={styles.choose}>Please Choose the size</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={() => handleSize(0)}>
                    <Image src='/img/size.PNG' layout="fill" alt='' />
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={() => handleSize(1)}>
                    <Image src='/img/size.PNG' layout="fill" alt='' />
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={() => handleSize(2)}>
                    <Image src='/img/size.PNG' layout="fill" alt='' />
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <div className={styles.add}>
                <input onChange={(e) => setQuantity(e.target.value)} type='number' defaultValue={1} className={styles.quantity}/>
                <button className={styles.button} onClick={handleClick}>Add to Cart!</button>
            </div>
        </div>
    </div>
};

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
     props: {
       food: res.data,
     },
    };
   };

export default Product;