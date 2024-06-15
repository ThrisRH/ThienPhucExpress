import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouse,
  faBox,
  faCoins,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const Navba = () => {
  return (
    <View
      className="flex flex-[0.1] flex-row justify-items-center bg-white pl-[5%] pr-[5%] justify-between items-center"
      style={styles.boxshadow}
    >
      <View className="flex items-center w-[60px]">
        <FontAwesomeIcon icon={faHouse} size={24} color="#1c1c1c" />
        <Text className="text-[12px] mt-1 text-center">Trang chủ</Text>
      </View>
      <View className="flex items-center w-[60px]">
        <FontAwesomeIcon icon={faBox} size={24} color="#1c1c1c" />
        <Text className="text-[12px] mt-1 text-center">Đơn hàng</Text>
      </View>
      <View
        className="flex justify-items-center w-[60px] h-10 bg-[#A67D60] rounded-[20px]"
        style={styles.buttonshadow}
      >
        <Text className="text-[20px] mt-1 text-center w-full h-full text-white">
          +
        </Text>
      </View>
      <View className="flex items-center w-[60px]">
        <FontAwesomeIcon icon={faCoins} size={24} color="#1c1c1c" />
        <Text className="text-[12px] mt-1 text-center">Tài chính</Text>
      </View>
      <View className="flex items-center w-[60px]">
        <FontAwesomeIcon icon={faHeadset} size={24} color="#1c1c1c" />
        <Text className="text-[12px] mt-1 text-center">Trợ giúp</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxshadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowRadius: 8,
    shadowOpacity: 100,
    elevation: 10,
  },
  buttonshadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    elevation: 5,
  },
});
export default Navba;
