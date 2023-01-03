import React, {useState} from 'react';

import Footer from "../Design/Footer";
import AboutInfo from "./MainAbout/AboutInfo"
import SiteSocial from './MainAbout/AboutSocial';
import AboutProjects from './MainAbout/AboutProjects';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image'
import mainimage from '../styles/style_images/moonsun.jpg'

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
            <Image width={500} height={313} src={mainimage} alt="Space"/><br /><br /><br />
            <br /><br /><br /><br />
            <Info />
            <Projects />
            <Social /> <br /><br />
            
            <br /> 
        </>
     );
}
 
export default About;