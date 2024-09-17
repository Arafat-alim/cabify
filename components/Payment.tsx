import { Alert, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { PaymentSheetError, useStripe } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";
import { fetchApi } from "@/lib/fetch";
import { PaymentProps } from "@/types/type";

const Payment = ({ fullName, email, amount, driverId, time }: PaymentProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const confirmHandler = async (paymentMethod, _, intentCreationCallback) => {
    const { paymentIntent, customer } = await fetchApi(
      "/(api)/(stripe)create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName || email.split("@")[0],
          email: email,
          amount: amount,
          paymentMethodId: paymentMethod.id,
        }),
      }
    );

    //! if payment intended and client secret id is generated then we can call our new pay api
    if (paymentIntent.client_secret) {
      const { result } = await fetchApi("/(api)/(stripe)/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payment_method_id: paymentMethod.id,
          payment_intend_id: paymentIntent.id,
          customer_id: customer,
        }),
      });

      if (result.client_secret) {
        // ! create ride
      }
    }
  };

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
