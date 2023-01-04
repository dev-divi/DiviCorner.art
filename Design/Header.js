import Head from 'next/head'
//import Link from 'next/link'
import Layout, { siteTitle, name } from './Layout'
//import styles from '../styles/Home.module.css'
//import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import React from "react";
//import ReactDOM from "react-dom";
import "98.css"; 

const NavBar = () => {
    const [count, setCount] = React.useState(0);

    return ( 
        <nav className={utilStyles.siteheader}>
            {/* 
             temporarily disable site navigator 

            <div style={{ width: 300 }} className="window">
              <div className="title-bar">
                <div className="title-bar-text">Site Navigator V. 214.22.14</div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize" />
                  <button aria-label="Maximize" />
                  <button aria-label="Close" />
                </div>
              </div> 
              

              <div className="window-body">
                {/* <p style={{ textAlign: "center" }}> Welcome Back. {count}</p> 
                <div className="field-row" style={{ justifyContent: "center" }}>
                  <Link href="/">
                    <button >Home</button>
                  </Link>
                  <Link href="/about">
                    <button >About</button>
                  </Link>
                  */}
                  {/*}
                  <Link href="/">
                    <button onClick={() => setCount(count + 1)}>Home</button>
                  </Link>
                  <Link href="/about">
                    <button onClick={() => setCount(count - 1)}>About</button>
                  </Link>
                  <Link href="/secrets"> 
                    <button onClick={() => setCount(0)}>All Texts</button>
                  </Link> 
                </div>
              </div>
            </div>*/}
            <Head>
                <title>{siteTitle}</title> {/* tab title */}
            </Head>
            
        </nav> 
     );
}
 
export default NavBar;