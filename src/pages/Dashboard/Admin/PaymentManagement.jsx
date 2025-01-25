import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";

const PaymentManagement = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_Key);
    return (
        <div>
            <Helmet>Healthcare || Payement Management</Helmet>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentManagement;