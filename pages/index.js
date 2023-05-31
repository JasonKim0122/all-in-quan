import axios from 'axios';
import Head from 'next/head';
import Image from "next/legacy/image";
import styles from '@/styles/Home.module.css';
import Featured from '@/components/Featured';
import FoodList from '@/components/FoodList';

export default function Home({foodList}) {
  return (
    <>
      <Head>
      <title>All In Quán</title>
        <meta name="description" content="Authentic Vietamesse Food" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      <FoodList foodList = {foodList}/>
    </>
  )
}

export const getServerSideProps = async () => {
 const res = await axios.get("http://localhost:3000/api/products");
 return {
  props: {
    foodList: res.data,
  }
 }
};
