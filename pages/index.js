import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.maintitle}>
        <h1>Project</h1>
      </div>
      <div className={styles.main}>
        <div>
          <div className={styles.homeTitle}>
            Ji Young Wook
            <br />지 영 욱
          </div>
          <div className={styles.mainword}>
            <br />
            중부대학교 고양캠퍼스 정보보호학을 전공하고 있는
            <br />
            18학번 지영욱입니다.
            <br />
            <br />웹 어플리케이션 보안 수업을 들으며, 팀 프로젝트에서는
            <br />
            현재 웹 디자인, Front-end 부분을 담당하고 있습니다
          </div>
        </div>
        <div>
          <img src="main.gif" alt="main" width={230} height={230} />
        </div>
      </div>
    </div>
  )
}
