import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Featured from '@/components/Featured'
import FoodList from '@/components/FoodList'

export default function Home() {
  return (
    <>
      <Head>
      <title>All In Quán</title>
        <meta name="description" content="Authentic Vietamesse Food" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      <FoodList />
    </>
  )
}
