import { Alert, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { PaymentSheetError, useStripe } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const confirmHandler = async () => {};

  const initializePaymentSheet = async () => {
    // const { paymentIntent, ephemeralKey, customer } =
    //   await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      //   customerId: customer,
      //   customerEphemeralKeySecret: ephemeralKey,
      //   paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      //   allowsDelayedPaymentMethods: true,
      //   defaultBillingDetails: {
      //     name: "Jane Doe",
      //   },

      intentConfiguration: {
        mode: {
          amount: 999,
          currencyCode: "USD",
        },
        confirmHandler: confirmHandler,
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
      setSuccess(true);
    }
  };

  return (
    <>
      <CustomButton
        title="Confirm Ride"
        className="p-3 my-10"
        onPress={openPaymentSheet}
      />
    </>
  );
};

export default Payment;
