import styles from '../styles/layout.module.css';
import Link from 'next/link'
//import utilStyles from '../styles/utils.module.css'
import '98.css';
const FooterArticle = () => {
    return ( 
        <>
            <section className={styles.footer}> 
            <div className="window-body">
              <button className="divi-button">
                <Link href="/">
                  <a className="divi-button"> Home </a> 
                </Link> 
              </button>
              {/* 
              <button> 
                <Link href="/secrets">
                  <a className="divi-button">- Other Page </a> 
                </Link> 
              </button>
              */}
            </div>   
{/*

            <Link href={`/all`}>
              <a>- All Texts </a> 
            </Link>
              <div className={utilStyles.patreon}>
              Support the focus to further explore the secrets involved in accessing focused creative energy and sharing these secrets with all
              by becoming one of my first patreon subscribers. You also support my ability to bring projects into creation. 

              <br /> <br /> 
               <span className={utilStyles.linksUnderline}> */} 
               {/*v}
               <button className={utilStyles.superbutton}> <Link href="https://www.patreon.com/0xDivi">  0xDivi on Patreon </Link> </button>
              {/* </span> 
               </div> */} 
            </section>
        </>
     );
}
 
export default FooterArticle;