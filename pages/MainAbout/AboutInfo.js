
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "//Divenie.us14.list-manage.com/subscribe/post?u=b0ffda99389052cbadfd8c7ef&amp;id=37bf0e3da7";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>


const AboutInfo = () => {
    return ( 
        <div>
            <p> 
                {/*
                Divi Corner contains refined, cultivated ancient secrets that are relevant and adaptable to real life. 
                <br /> 
                The Corner&apos;s focus on Life, Creativity, and Concepts 
                releases information to gain Success, Wealth, and Power over one&apos;s own life. 
    
                <br /> <br />  Within this information is easy to read, practical modern understandings of abstract concepts,
                easily accessible techniques and methods, with no bias or barrier to entry. 
                Anyone is equipped to gain understanding from the content in the Corner. 
                 <br /> <br />    

                There are people who believe that much of this knowledge should not be available to the public, 
                due to how civilian populations could misuse power, 
                and this is why it remains hidden. 
                
                Refinement Process: <br / >
                All information should point toward human freedom. 
                {/* This app has been designed to store only the core root of a secret&apos;s information, explaining a critically important concept in few words. <br /> */}
                {/* All texts should be entry level. <br /> 
                All texts should be non-biased. <br /> 
                Redundancy should be removed. <br /> 
                No text should be exclusive to a group. <br /> 
                
 */}
            What might be possible? 
                <br /> <br /> 
 
             </p>
                
            {/*
            <p> This is a website about sharing critical, consolidated meaning. </p> 
            <p> The text on the homepage is interactive even though it does not look it. </p> 
            <p> The Letters Project [ To be added ] is composed of interactive pieces that change when you click on certain words.</p>
            
            
                unlike abstract philosophy that can be difficult or confusing to adapt to the world you live in. 
           

            <p> <br /> 
            Join the email list to be notified of new works. </p>
            
            <SimpleForm /> 
            <br />
            <br /> 
             */ }
                Support my ability to further explore the secrets of accessing focused creative energy and share secrets with all 
                by donating to my ethereum or bitcoin addresses. I can change the world with your help. 
<br /> 
                <br/> 
                bitcoin donation address: bc1q99vng5nykfjv7vy8crj7p3a4nluwgm44mup20a<br /> 
                ethereum donation address: 0x39c7C9FdB10Df996d59590fd5cC52483a919EB29  <br /> 
<br /> <br /> 
            Thank you for being here. 

        </div> 
     );
}
 
export default AboutInfo;