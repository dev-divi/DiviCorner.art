import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useState} from 'react';
import SiteTexts from './MainSite/SiteTexts';
import SiteBook from './MainSite/SiteBook';
import SiteLazer from './MainSite/SiteLazer';
//import SiteLetters from './MainSite/SiteLetters';


import utilStyles from '../styles/utils.module.css';
import Date from '/library_system/date';
//load texts from 
import { getSortedPostsData } from '../library_system/texts'
//import { getSortedPostsDataMagic } from '../library_system/magic'
//import { getSortedPostsDataLetters } from '../library_system/letters'

import mainimage from '../styles/style_images/moonsun.jpg'
//🟡 
//🟠
//🟣
//⚫
//🔵
//🟤
//⚪
//🟢
//🔴

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

function Lazer(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);
  return (
   <React.Fragment>
    <h3></h3>
    <span onClick={handleToggle} className={utilStyles.thepointer}>fire lazer🟢 </span>
    {showDetail && <p>
      - <SiteLazer /> -
      </p>}
  </React.Fragment> 
  )
} 
function Book(){
  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);

  return (
  <React.Fragment>
    <h3></h3>
    <span onClick={handleToggle} className={utilStyles.thepointer}>books🟢</span>
    {showDetail && 
      <SiteBook /> 
    }
  </React.Fragment>)
  }        
  {/*img
  function Letters(){
    const [showDetail,setShowDetail] = useState(false);
    const handleToggle = () => setShowDetail(!showDetail);
  
    return (
    <React.Fragment>
      <h3></h3>
      <span onClick={handleToggle}className={utilStyles.thepointer}>letters🟢</span>
      {showDetail && 
        <SiteLetters /> 
      }
    </React.Fragment>)
    }
  */} 
    function TextsBak(){
      //const [showDetail,setShowDetail] = useState(false);
      //const handleToggle = () => setShowDetail(!showDetail);
      return (
       <React.Fragment>
        <h3></h3>
        <span onClick={handleToggle}className={utilStyles.thepointer}>texts🟢  </span>
        {showDetail && <p>
          <SiteTexts /> 
          </p>}
      </React.Fragment> 
      )
    }  
    
 
export default function Home({ allPostsData }) {

  const [showDetail,setShowDetail] = useState(false);
  const handleToggle = () => setShowDetail(!showDetail);   
  return (
    <>
      <p> 
        
      {/* 
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      
      Begin Site 
      
      
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      */ }
      
                {/* 
                    Site main image */} 
               
               <Image width={500} height={313} src={mainimage} alt="Space"/>
               <br /> <br /> 

       
             
                    The Lord’s Spirit is on me, <br /> 
    because He has anointed me to preach good news to the humble.<br /> 
                              
                <p>  
                  <br /> 
                  He Loves me. <br />
                  He Loves you.<br />
                  He Loves us. <br />
                  I love you. 
                </p> 
                  <br /> <br /> <br /> <br /> <br /> 
 
                <dl>
                    <dt><strong>Ruach {/* &bull;o&bull;morph*/ }</strong></dt>
                    <dd>
                        <em>noun</em><br />
                        “The basic meaning of ruach is both wind or breath, but neither is understood as essence; rather it is the power encountered in the breath and the wind, whose whence and whither remains mysterious…"                 
                    </dd>
                </dl>
                <br /> <br />
                {/* <Lazer /> */} 

            {/* 
                <React.Fragment>
            <h3></h3>
            <span onClick={handleToggle}className={utilStyles.thepointer}>texts🟢  </span>
            {showDetail && <p>
              <span className={utilStyles.linksUnderline}> 

              <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>  </h2>
                         <Link href={`/secrets`}>
                        <a><i>View All </i></a> 
                        </Link>
                         {/* 
                            Latest Text: 

                              ---------------------
                              -Insert latest text -
                              ---------------------
                        */}
                        <br />
                        {/* <small className={utilStyles.lightText}>
                            January 
            </small> 

                </section> */} 
              
                {/* Texts autoload */}

                {/*
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>  </h2>
                    
                    <ul className={utilStyles.list}>
                      
                    {allPostsData.map(({ id, date, title, category }) => (
                        <li className={utilStyles.listItem} key={id}>
                        
                        <Link href={`/texts/${id}`}>
                        <a>[{category}]&nbsp;-&nbsp;<i>{title}</i></a>
                        </Link> 
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small> 
                        </li>
                    ))}
                    </ul>
                </section>
                 
                </span> 
              </p>}
          </React.Fragment>  
          {/*<Texts /> */}

          {/* 
          <Book />*/}
    
            {/*<Letters />*/}

      </p> 


    </>
  )
}
