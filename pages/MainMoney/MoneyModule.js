import Stripe from "../../payment_systems/Stripe";
import MoneyDonation from "./MoneyDonation";
import MoneyStart from "./MoneyStart";
import MoneyThankYou from "./MoneyThankYou";


const MoneyModule = () => {
    return ( 
        <>
            <MoneyStart /> 
            <MoneyDonation /> 
            <Stripe /> 

            <MoneyThankYou /> 
        </>
     );
}
 
export default MoneyModule;