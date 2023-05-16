import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard";

const FoodList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>AUTHENTIC VIET FOOD YUM</h1>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum quibusdam voluptates recusandae architecto provident 
                eum nam laborum officiis delectus accusantium deleniti, 
                saepe cupiditate voluptas aspernatur nobis aliquam praesentium unde deserunt.
            </p>
            <div className={styles.wrapper}>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
            </div>
        </div>
    )
}

export default FoodList;