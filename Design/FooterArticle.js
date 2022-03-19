import styles from '../styles/layout.module.css';
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

const FooterArticle = () => {
    return ( 
        <>
            <section className={styles.footer}> 
            <span className={utilStyles.linksUnderline}>  
              <Link href="/"> - Home </Link></span > 
              <span className={utilStyles.linksUnderline}> <Link href={`/all`}>
                <a><i>- All Texts </i></a> 
              </Link></span> 
            
              <br /> 
              <br /> 

              <div className={utilStyles.patreon}>
              Support the focus to further explore the secrets involved in accessing focused creative energy and sharing these secrets with all
              by becoming one of my first patreon subscribers. You also support my ability to bring projects into creation. 

              <br /> <br /> 
              {/* <span className={utilStyles.linksUnderline}> */} 
               <button className={utilStyles.superbutton}> <Link href="https://www.patreon.com/0xDivi">  0xDivi on Patreon </Link> </button>
              {/* </span> */} 
               </div>
            </section>
        </>
     );
}
 
export default FooterArticle;