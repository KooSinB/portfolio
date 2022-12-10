import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function about() {
  return (
    <div className={styles.projectmain}>
      <Head>
        <title>Project</title>
      </Head>
      <h1>Project</h1>
      <p />
      <div className={styles.projectbox1}></div>
      <h2>WAS</h2>
      <div className={styles.intro}>
        Web-Application-System
        <br />
        <br />
        작업기간 : 2022.10.01 ~ 2022.12.11
        <br />
        <br />
        <Link href="https://github.com/KooSinB/was">Go Github</Link>
      </div>

      <div className={styles.projectbox2}></div>
      <h2>Next Shop</h2>
      <div className={styles.intro}>
        Next E-commerce
        <br />
        <br />
        작업기간 : 2022.10.01 ~ 2022.12.11
        <br />
        <br />
        <Link href="https://github.com/KooSinB/next-shop">Go Github</Link>
      </div>
      <div className={styles.projectbox3}></div>
      <h2>Let's Festival</h2>
      <div className={styles.intro}>
        지역 축제 소개 사이트
        <br />
        <br />
        작업기간 : 2022.10.01 ~ 2022.12.11
        <br />
        <br />
        <Link href="https://github.com/KooSinB/Let-s-Festival">Go Github</Link>
      </div>
    </div>
  )
}