import React, {useState} from 'react';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../library_system/texts_all'
import Link from 'next/link'
import Date from '/library_system/date';
import '98.css';
import Image from 'next/image'
//import Coin from '../styles/style_images/coin.png'
import Ring from '../styles/style_images/ring.png'
//import Ring from '../styles/style_images/moonsunring.png'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
 
const AllTexts = ({ allPostsData }) => {
    return ( 
        <> 
                {/* Texts autoload */}
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>  </h2>
                    <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title, category }) => (

                        <li className={utilStyles.listItem} key={id}>
                        <span className={utilStyles.linksUnderline}> 

                        <div className="window-body">
                            {/*<Image width={30} height={33} src={Coin} alt="coin"/> */}
                        &nbsp; 

                        <button className="utilStyles.divi-button">
                            <Link href={`/texts/${id}`}>
                            <a className="divi-button"> {title} </a> 
                            </Link> 
                            <Image width={30} height={33} src={Ring} alt="ring"/> 
                        </button>            

                        </div>   
                        </span>
                        
                        <small className={utilStyles.lightText}>
                           {/*  <Date dateString={date} />  */}
                            &nbsp;-&nbsp; 
                            {category} - 

                        </small>
                        <br /> <br/>

                        </li>
                    ))}
                    </ul>
                </section>         

        </>
     );
}
 
export default AllTexts;