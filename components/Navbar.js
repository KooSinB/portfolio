import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.header}>
      <h1 className={styles.blogname}>
        <Link href="/">JYW&apos;s PortFolio</Link>
      </h1>

      <nav className={styles.navbar}>
        <div className={styles.navigation}>
          <div className={styles.profilesection}>
            <img className={styles.profileimg} src="/profile.gif" alt="image" />
            <div className={styles.profileintro}>
              Ji Young Wook
              <br />
              중부대학교 정보보호학과
              <br />
              18학번 지영욱
              <br />이 남자의 이름입니다
              <br />웹 어플리케이션 수업을 통해
              <br />
              웹을 공부중이며
              <br />
              FallGuys 팀원들과 프로젝트를
              <br />
              진행중입니다
            </div>

            <hr />
          </div>
          <div className={styles.middle}>
            <Link href="/">Home</Link>
            <br />
            <br />
            <Link href="project">Project</Link>

            <div className={styles.buttonbox}>
              <a
                className={styles.button}
                href="https://github.com/KooSinB"
                target="_blank"
              >
                Go Github
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          Google
          <br />
          khiyaj0320@gmail.com
        </div>
      </nav>
    </div>
  )
}
