import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="w-full relative h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) =>
              setForm({
                ...form,
                name: value,
              })
            }
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm({
                ...form,
                email: value,
              })
            }
          />
          <InputField
            secureTextEntry={true}
            label="Password"
            placeholder="Enter your Password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) =>
              setForm({
                ...form,
                password: value,
              })
            }
          />
          <CustomButton
            onPress={onSignUpPress}
            title="Sign Up"
            className="mt-6 p-3"
          />

          {/* OAuth */}
          <OAuth />

          <Link
            href={"/(auth)/sign-in"}
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an Account? </Text>
            <Text className="text-primary-500 m-5">Login</Text>
          </Link>
        </View>

        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
};

export default SignUp;