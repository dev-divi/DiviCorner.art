import styles from '../styles/layout.module.css';
import Link from 'next/link'

const FooterMagic = () => {
    return ( 
        <>
            <section className={styles.footer}>  
              <Link href="/"> - Home </Link>
              {/* <Link href={`/all`}>
                <a><i>- All Texts </i></a> 
              </Link> */  }
            </section>
        </>
     );
}
 
export default FooterMagic;