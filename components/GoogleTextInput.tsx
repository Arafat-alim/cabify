import { GoogleInputProps } from "@/types/type";
import { Image, Text, View } from "react-native";

const GoogleTextInput = ({
  icon,
  containerStyle,
  initialLocation,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row justify-center items-center relative z-50 rounded-xl mb-5 ${containerStyle}`}
    >
      <Image source={icon} />
      <Text>Search</Text>
    </View>
  );
};

export default GoogleTextInput;
