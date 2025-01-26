import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Dashboard/Admin/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_Key);
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
