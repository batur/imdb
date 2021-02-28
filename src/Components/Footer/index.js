import React from 'react'
import styles from './style.module.scss'
import Facebook from '@Elements/Icons/Facebook'
import Instagram from '@Elements/Icons/Instagram'
import Twitter from '@Elements/Icons/Twitter'
import AppStore from 'src/Elements/Icons/AppStoreIcon'
import GooglePlay from 'src/Elements/Icons/GooglePlayIcon'
import MsStore from 'src/Elements/Icons/MsStoreIcon'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <nav className={styles.nav}>
            <ul className={styles.pages}>
              <li>Home</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Collection Statement</li>
              <li>Help</li>
              <li>Manage Account</li>
            </ul>
          </nav>
          <div className={styles.copyright}>
            <p>Copyright © 2021 DEMO Streaming. All Rights Reserved.</p>
          </div>
        </div>
        <div className={styles.sub}>
          <div className={styles.social}>
            <Link href="https://www.facebook.com/">
              <a>
                <Facebook />
              </a>
            </Link>
            <Link href="https://www.instagram.com/ta2ulk/">
              <a>
                <Instagram />
              </a>
            </Link>
            <Link href="https://twitter.com/PaxTartarica">
              <a>
                <Twitter />
              </a>
            </Link>
          </div>
          <div className={styles.stores}>
            <Link href="https://www.apple.com/app-store/">
              <a>
                <AppStore />
              </a>
            </Link>
            <Link href="https://play.google.com/">
              <a>
                <GooglePlay />
              </a>
            </Link>
            <Link href="https://www.microsoft.com/store">
              <a>
                <MsStore />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
