import Image from "next/legacy/image";
import styles from '../styles/Featured.module.css';
import { useState } from "react";

const Featured = () => {
    const [index, setIndex] = useState(0);
    
    const images = [
        '/img/food-1.JPG',
        '/img/food-2.JPG',
        '/img/food-3.JPG',
        '/img/food-4.JPG',
        '/img/food-5.JPG',
        '/img/food-6.JPG',
        '/img/food-1.JPG',
        '/img/food-2.JPG',
        '/img/food-3.JPG',
        '/img/food-4.JPG'
    ];

    const handleArrow = (direction) => {
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 1)
        }
        if (direction === "r") {
            setIndex(index !== 1 ? index + 1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}} onClick={()=> handleArrow('l')}>
                <Image src='/img/arrowL.png' alt="arrow for shifting left" layout='fill' />
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-20*index}vw)`}}>
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                    <Image src={img} alt='featured food' layout='fill' objectFit='contain'/>
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{right:0}} onClick={()=> handleArrow('r')}>
                <Image src='/img/arrowR.png' alt="arrow for shifting right" layout='fill' objectFit="contain"/>
            </div>
        </div>
    )
}

export default Featured;