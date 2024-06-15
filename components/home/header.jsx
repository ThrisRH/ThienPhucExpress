import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Header = () => {
  return (
    <View className="flex bg-white z-10">
      <View
        className="Header flex flex-row pt-[15%] pl-[5%] items-center bg-white rounded-b-[20px] pb-4"
        style={styles.boxshadow}
      >
        <View className="Title flex w-[50%]">
          <Text className="text-[#1c1c1c] font-bold text-[30px]">
            Trang chủ
          </Text>
        </View>
        <View className="flex flex-row w-[50%] justify-end right-[5%]">
          <Image
            className="noticeBoard mr-[12px]"
            style={styles.icon}
            source={require("../Icon/image.png")}
          />
          <View className="w-30 h-30 bg-[#A67D60]" style={styles.border}>
            <Image style={styles.stretch} source={require("../Icon/avt.jpg")} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxshadow: {
    shadowColor: "#000000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 10,
  },

  border: {
    borderColor: "#1c1c1c",
    borderWidth: 2,
    borderRadius: 20,
  },
  stretch: {
    width: 30,
    height: 30,
    borderRadius: 20,
    resizeMode: "stretch",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "stretch",
  },
});

export default Header;
