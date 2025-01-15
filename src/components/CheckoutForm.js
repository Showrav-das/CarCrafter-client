"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Alert, Box, Button, Paper, Typography } from "@mui/material";

const stripeKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
if (!stripeKey) {
  throw new Error("Stripe public key is missing");
}
const stripePromise = loadStripe(stripeKey);
function CheckoutForm({ amount, title }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState("");
  console.log("first", stripePromise);
  const handleSubmit = async (e) => {
    console.log("before");
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    console.log("after");
    // Create payment intent
    const response = await fetch(
      "https://car-server-ssgi.onrender.com/api/payment",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, title }),
      }
    );
    console.log("response", response);
    const { clientSecret } = await response.json();
    console.log("first", clientSecret);
    // Confirm payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      // Payment successful
      // window.location.href = "/success";
      console.log("successful");
      setPaymentSuccess("Your payment has been successfully processed!");
    }
    setLoading(false);
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, mx: "auto", p: 4, mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Amount: ${amount}
        </Typography>

        <Box sx={{ mb: 3, p: 2, border: "1px solid #e0e0e0", borderRadius: 1 }}>
          <CardElement />
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={!stripe || loading}
          sx={{ mt: 2 }}
        >
          {loading ? "Processing..." : "Pay Now"}
        </Button>
      </form>
      {paymentSuccess && (
        <Typography variant="subtitle1" gutterBottom sx={{ color: "blue" }}>
          {paymentSuccess}
        </Typography>
      )}
    </Paper>
  );
}

export default function PaymentForm({ amount, title }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={amount} title={title} />
    </Elements>
  );
}
