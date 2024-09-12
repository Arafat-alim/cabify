import { DriverCardProps } from "@/types/type";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { Image, Text, View } from "react-native";
import { formatTime } from "@/lib/utils";

const DriverCard = ({ item, selected, setSelected }: DriverCardProps) => {
  return (
    <TouchableOpacity
      onPress={setSelected}
      className={`${selected === item.id ? "bg-general-600" : "bg-white"} bg-red-500 flex flex-row justify-between items-center py-5 px-3 rounded-xl`}
    >
      <Image
        source={{ uri: item?.profile_image_url }}
        className="w-14 h-14 rounded-full"
        resizeMode="contain"
      />
      <View className="flex-1 flex flex-col items-start justify-center mx-3">
        <View>
          <Text>{item?.title}</Text>
          <View></View>
        </View>
        <View>
          <View></View>
          <Text>|</Text>
          <Text>{formatTime(item?.time!)}</Text>
          <Text>|</Text>
          <Text>{item?.car_seats}</Text>
        </View>
      </View>
      <Image
        source={{ uri: item.car_image_url }}
        className="w-14 h-14 rounded-full"
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default DriverCard;
