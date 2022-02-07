import React, {useState} from 'react';

import Footer from "../Design/Footer";
import AboutInfo from "./MainAbout/AboutInfo"
import SiteSocial from './MainAbout/AboutSocial';
import AboutProjects from './MainAbout/AboutProjects';
import utilStyles from '../styles/utils.module.css';

function Info(){
    const [showDetail,setShowDetail] = useState(false);
    const handleToggle = () => setShowDetail(!showDetail);
    return (
     <React.Fragment>
      <h3></h3>
      <span onClick={handleToggle} className={utilStyles.thepointer}>info🟢 </span>
      {showDetail && <p>
        <AboutInfo />
        </p>}
    </React.Fragment> 
    )
  }
function Social(){
const [showDetail,setShowDetail] = useState(false);
const handleToggle = () => setShowDetail(!showDetail);
return (
<React.Fragment>
    <h3></h3>
    <span onClick={handleToggle} className={utilStyles.thepointer}>social🟢</span>
    {showDetail && 
    <SiteSocial /> 
    }
</React.Fragment>)
}  

function Projects(){
const [showDetail,setShowDetail] = useState(false);
const handleToggle = () => setShowDetail(!showDetail);

return (
<React.Fragment>
    <h3></h3>
    <span onClick={handleToggle} className={utilStyles.thepointer}>projects🟢</span>
    {showDetail && 
    <AboutProjects /> 
    }
</React.Fragment>)
}   
const About = () => {
    return ( 
        <> 
            <Info />
            <Projects />
            <Social /> <br /><br />
            
            <Footer /><br /> 
        </>
     );
}
 
export default About;