import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle, name } from './Layout'
import styles from '../styles/Home.module.css'

const NavBar = () => {
    return ( 
        <nav className={utilStyles.siteheader}>
            <section className={utilStyles.headingMd}>
            <Head>
                <title>{siteTitle}</title> {/* tab title */}
            </Head>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
              <Link href="/">
              <button className={utilStyles.superbutton}>Home</button>
              </Link>
              <Link href="/about">
                <button className={utilStyles.superbutton}>About</button>
              </Link>
              {/* 
              <Link href=""> - Social </Link> 
              <Link href=""> - Gaming </Link> 
              */} 
            <section className={utilStyles.navbar_links}>
            </section>
            </h2>
            </section>
        </nav> 
     );
}
 
export default NavBar;