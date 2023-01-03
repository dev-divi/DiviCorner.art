import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/layout.module.css';

export const siteTitle = 'DiviCorner.art'
export const name = 'Divi Corner'

const Layout = ( { children } ) => {
    return ( 
        
        <div id="wrapper"> {/* unneeded */} 
            {/* <div id="container"> unneeded */} 
            
                <Header />
                <section className="open-book">    
                    <header>
                        <h1>DiviCorner.art</h1>
                        <h6> </h6>
                    </header>
                    <article>
                        <h2 className="chapter-title">Divi&apos;s Corner</h2>

                        { children }
                    </article>

                    <Footer />
                    <br />  
                </section > 
            {/* </div> */}
        </div>
     );
}
 
export default Layout;