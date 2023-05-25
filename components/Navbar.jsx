import styles from '../styles/Navbar.module.css';
import Image from "next/legacy/image";
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const quantity = useSelector((state) => state.cart.quantity)
    return (
        <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.callButton}>
                <Image src='/img/callButton.png' width='30' height='30' alt='click to call button' />
            </div>
            <div className={styles.texts}>
                <div className={styles.text}>Order now</div>
                <div className={styles.text}>222-222-2222</div>
            </div>


        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>Homepage</li>
                <li className={styles.listItem}>Products</li>
                <li className={styles.listItem}>Menu</li>
                <Image className={styles.logo} src='/img/logo.PNG' alt='resturant logo' width='200' height='70' />
                <li className={styles.listItem}>Events</li>
                <li className={styles.listItem}>Contacts</li>
            </ul>
        </div>
        <Link href="/cart" passHref>
        <div className={styles.item}>
            <div className={styles.cart}>
                <Image src='/img/cart.png' alt='items in your cart' width='20' height='20' />
                <div className={styles.counter}>{quantity}</div>
            </div>
        </div>   
        </Link>
        </div>
    )
}

export default Navbar;