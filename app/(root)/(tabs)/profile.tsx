import InputField from "@/components/InputField";
import { useUser } from "@clerk/clerk-expo";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const { user } = useUser();
  console.log(user?.hasVerifiedEmailAddress);
  const staticImg =
    "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <Text className="p-5 text-xl font-JakartaBold">Profile</Text>
        <View className="flex  justify-center items-center my-5">
          <Image
            source={{
              uri: user?.externalAccounts[0]?.imageUrl
                ? user?.imageUrl
                : staticImg,
            }}
            className="rounded-full h-[110px] w-[110px] border-[3px] border-black shadow-sm shadow-neutral-300"
          />
        </View>

        <View className="flex flex-col justify-center items-start bg-white px-5 py-3 shadow-sm rounded-lg shadow-neutral-300">
          <View className="flex flex-col w-full items-start justify-start">
            <InputField
              label="First Name"
              editable={false}
              containerStyle="w-full"
              inputStyle="p-3.5"
              placeholder={user?.firstName || "Not Found"}
            />
            <InputField
              label="Last Name"
              editable={false}
              containerStyle="w-full"
              inputStyle="p-3.5"
              placeholder={user?.lastName || "Not Found"}
            />
            <InputField
              label="Email"
              editable={false}
              containerStyle="w-full"
              inputStyle="p-3.5"
              placeholder={
                user?.primaryEmailAddress?.emailAddress || "Not Found"
              }
            />
            <InputField
              label="Email Status"
              editable={false}
              containerStyle={`w-full ${user?.hasVerifiedEmailAddress ? "bg-green-200" : "bg-red-200"}`}
              inputStyle="p-3.5"
              placeholder={
                user?.hasVerifiedEmailAddress ? "Verified" : "Not Verified"
              }
              placeholderTextColor={
                user?.hasVerifiedEmailAddress ? "green" : "gray"
              }
            />
            <InputField
              label="Phone Number"
              editable={false}
              containerStyle="w-full"
              inputStyle="p-3.5"
              placeholder={user?.primaryPhoneNumber?.phoneNumber || "Not Found"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
