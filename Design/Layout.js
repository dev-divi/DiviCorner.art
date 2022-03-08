import Footer from "./Footer";
import Header from "./Header";
import styles from '../styles/layout.module.css';

export const siteTitle = 'DiviCorner.art'
export const name = 'Divi Corner'

const Layout = ( { children } ) => {
    return ( 
        <div className={styles.container}>
            <Header /> 
            { children }
            {/* <Footer /> */}<br />  
        </div>
     );
}
 
export default Layout;