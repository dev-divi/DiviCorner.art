import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/layout.module.css';

export const siteTitle = 'Divi\'s Corner'
export const name = 'Divi Corner'
import Link from 'next/link'
import Image from 'next/image'

import Ring from '../styles/style_images/moonsunring.png'

const Layout = ( { children } ) => {
    return ( 
        
        <div id="wrapper"> {/* unneeded */} 
            {/* <div id="container"> unneeded */} 
            
                <Header />
                <section className="open-book">    
                    <header>
                        
                        <Link href="/" className="open-book ">
                            <h1>DiviCorner.art </h1> 
                        </Link>
                              
                        <h6> </h6>
                    </header>
                    <article>
                    <Link href="/" className="open-book "> 
                        <h2 className="chapter-title"> Divi&apos;s Corner <Image width={30} height={30} src={Ring} alt="ring"/> 
</h2> 

                    </Link>
                        { children }
                    </article>

                    <Footer />
                </section > 
            {/* </div> */}
        </div>
     );
}
 
export default Layout;