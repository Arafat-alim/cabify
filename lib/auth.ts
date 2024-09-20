import * as SecureStore from "expo-secure-store";
import * as Linking from "expo-linking";
import { fetchApi } from "./fetch";
// export interface TokenCache {
//   getToken: (key: string) => Promise<string | undefined | null>;
//   saveToken: (key: string, token: string) => Promise<void>;
//   clearToken?: (key: string) => void;
// }

export const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export const googleOAuth = async (startOAuthFlow: any) => {
  try {
    const { createdSessionId, signUp, setActive } = await startOAuthFlow({
      redirectUrl: Linking.createURL("/(root)/(tabs)/home", {
        scheme: "myapp",
      }),
    });

    if (createdSessionId) {
      //! If already logged in before then just authenticate and redirect the user to the home screen
      if (setActive) {
        setActive!({ session: createdSessionId });

        //! If new user found then we create a new account on the clerk and neon database then redirect the user to the home screen

        if (signUp.createdUserId) {
          await fetchApi("/(api)/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: `${signUp.firstName} ${signUp.lastName}`,
              email: `${signUp.emailAddress}`,
              clerkId: `${signUp.createdUserId}`,
            }),
          });
        }

        return {
          success: true,
          code: "success",
          message: "You have successful signin with Google",
        };
      }
    }
    return {
      success: false,
      code: "success",
      message: "An error occurred while signing in with Google",
    };
  } catch (error: any) {
    console.log("Error occured in GoogleOAuth Flow", error);
    return {
      success: false,
      code: error.code,
      message: error?.errors[0]?.longMessage,
    };
  }
};
