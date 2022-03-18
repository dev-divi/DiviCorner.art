import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle, name } from './Layout'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import button1 from '../public/button1.png';

import button2 from '../public/button2.png';

import button3 from '../public/button3.png';
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
              <Image width={70} height={40} src={button1} alt="Home" className={utilStyles.imagebutton}/>
              </Link>

              <Link href="/about">
              <Image width={70} height={40} src={button3} alt="About" className={utilStyles.imagebutton}/>
              </Link>
              {/* 
              <Link href=""> -img component Social </Link> 
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