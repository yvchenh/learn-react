// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import props_item from 'src/pages/qcomps/props_item.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <props_item />
    </div>
  )
}
