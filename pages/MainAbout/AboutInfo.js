
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "//Divenie.us14.list-manage.com/subscribe/post?u=b0ffda99389052cbadfd8c7ef&amp;id=37bf0e3da7";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>


const AboutInfo = () => {
    return ( 
        <div>
            <p> 
                The perspectives contained here are refined and cultivated texts written in a universally practical and simple way for real life, 
                unlike abstract philosophy that can be difficult or confusing to adapt to the world you live in. </p>

            {/*
            <p> This is a website about sharing critical, consolidated meaning. </p> 
            <p> The text on the homepage is interactive even though it does not look it. </p> 
            <p> The Letters Project [ To be added ] is composed of interactive pieces that change when you click on certain words.</p>
            */ }
            <p> There is tons of useful content yet to be added. <br /> 
                Please join the email list to be notified of new texts, letters, and books as major updates are released. </p>
            
            <SimpleForm /> 

            Thank you for being here. 

        </div> 
     );
}
 
export default AboutInfo;