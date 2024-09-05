import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignin = async () => {};
  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text>Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <CustomButton
        title="Login with Google"
        className="mt-5 shadow-none p-3"
        IconLeft={() => (
          <Image source={icons.google} className="w-5 h-5 mx-4" />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignin}
      />
    </View>
  );
};

export default OAuth;
