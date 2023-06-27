import Image from "next/image";
import styles from '../styles/menu.module.css';
const Menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.card}>
                    <h2>Check out our amazing selection of food</h2>
                </div>
            </div>
            <div className={styles.item}>
                <Image src="/img/menu.JPG" alt="picture of menu with prices" width={'500'} height={'485'} priority={true}/>
            </div>
        </div>
    )
}

export default Menu 