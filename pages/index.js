import axios from 'axios';
import Head from 'next/head';
import Image from "next/legacy/image";
import styles from '@/styles/Home.module.css';
import Featured from '@/components/Featured';
import FoodList from '@/components/FoodList';
import AddButton from '@/components/AddButton';
import Add from '@/components/Add';
import { useState } from 'react';

export default function Home({foodList, admin}) {
  const [close, setClose] = useState(true);

  return (
    <>
      <Head>
      <title>All In Quán</title>
        <meta name="description" content="Authentic Vietamesse Food" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      {admin && <AddButton setClose={setClose}/>}
      <FoodList foodList = {foodList}/>
      {!close && <Add setClose={setClose}/>}
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || '';
  let admin = false;

  if(myCookie.token === process.env.TOKEN) {
    admin = true;
  }

 const res = await axios.get("http://localhost:3000/api/products");
 return {
  props: {
    foodList: res.data,
    admin
  }
 }
};
