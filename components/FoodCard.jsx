import Image from 'next/image';
import styles from '../styles/FoodCard.module.css';

const FoodCard = () => {
    return (
        <div className={styles.container}>
            <Image src='/img/food-1.JPG' alt='menu item #1' width='400' height='400'/>
            <h1 className={styles.title}>EggRoll</h1>
            <span className={styles.price}>$20</span>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Quae, suscipit! Deserunt 
                natus adipisci consequatur, excepturi 
                voluptatum molestias porro delectus libero
                aliquam dicta nulla, illo ea quia unde, 
                impedit praesentium exercitationem.
            </p>
        </div>
    )
}

export default FoodCard;