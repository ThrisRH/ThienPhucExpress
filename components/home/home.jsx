import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  requireNativeComponent,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Navbar from "./navba";
import Header from "./header";
import { Iconify } from "react-native-iconify";

const Home = () => {
  return (
    <View className="flex flex-1">
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="Body z-0 flex-[0.90] pl-[5%] pr-[5%] bg-[#FBFBFB]"
      >
        <View className="flex pt-6">
          <Image
            style={styles.stretch}
            source={require("../Icon/banner1.png")}
          />
        </View>
        <View className="flex flex-col mt-8">
          <Text className="font-bold text-[20px]">Chức năng</Text>
          <View className="flex flex-row mt-4 justify-items-end justify-between">
            <View className="flex flex-col w-[58px] items-center">
              <Image source={require("../Icon/calculator.png")} />
              <Text className="text-[#1c1c1c] text-[12px] w-full text-center pt-2">
                Tra tính cước phí
              </Text>
            </View>
            <View className="flex flex-col w-[58px] items-center">
              <Image
                source={require("../Icon/post.png")}
                className="w-[48px] h-[48px]"
              />
              <Text className="text-[#1c1c1c] text-[12px] w-full text-center pt-2">
                Tra cứu bưu cục
              </Text>
            </View>
            <View className="flex flex-col w-[58px] items-center">
              <Image source={require("../Icon/bank.png")} />
              <Text className="text-[#1c1c1c] text-[12px] w-full text-center pt-2">
                Liên kết ngân hàng
              </Text>
            </View>
            <View className="flex flex-col w-[58px] items-center">
              <Image source={require("../Icon/voucher.png")} />
              <Text className="text-[#1c1c1c] text-[12px] w-full text-center pt-2">
                Mã giảm giá
              </Text>
            </View>
          </View>
        </View>
        <View className="flex flex-col mt-8">
          <Text className="font-bold text-[20px]">Chức năng</Text>
          <View className="flex flex-row mt-4 justify-items-end justify-between">
            <View className="flex flex-col w-[58px] items-center">
              <Image source={require("../Icon/calculator.png")} />
              <Text className="text-[#1c1c1c] text-[12px] w-full text-center pt-2">
                Tra tính cước phí
              </Text>
            </View>
            <View className="flex flex-col w-[58px] items-center">
              <Image
                source={require("../Icon/post.png")}
                className="w-[48px] h-[48px]"
              />
              <Text className="text-[#1c1c1c] text-[12px] w-full text-center pt-2">
                Tra cứu bưu cục
              </Text>
            </View>
            <View className="flex flex-col w-[58px] items-center">
              <Image source={require("../Icon/bank.png")} />
              <Text className="text-[#1c1c1c] text-[12px] w-full text-center pt-2">
                Liên kết ngân hàng
              </Text>
            </View>
            <View className="flex flex-col w-[58px] items-center">
              <Image source={require("../Icon/voucher.png")} />
              <Text className="text-[#1c1c1c] text-[12px] w-full text-center pt-2">
                Mã giảm giá
              </Text>
            </View>
          </View>
        </View>
        <View className="flex flex-col mt-8">
          <Text className="font-bold text-[20px]">Chức năng</Text>
          <View className="flex flex-row mt-4 justify-items-end justify-between">
            <View className="flex flex-col w-[58px] items-center">
              <Image source={require("../Icon/calculator.png")} />
              <Text className="text-[#1c1c1c] text-[12px] w-full text-center pt-2">
                Tra tính cước phí
              </Text>
            </View>
            <View className="flex flex-col w-[58px] items-center">
              <Image
                source={require("../Icon/post.png")}
                className="w-[48px] h-[48px]"
              />
              <Text className="text-[#1c1c1c] text-[12px] w-full text-center pt-2">
                Tra cứu bưu cục
              </Text>
            </View>
            <View className="flex flex-col w-[58px] items-center">
              <Image source={require("../Icon/bank.png")} />
              <Text className="text-[#1c1c1c] text-[12px] w-full text-center pt-2">
                Liên kết ngân hàng
              </Text>
            </View>
            <View className="flex flex-col w-[58px] items-center">
              <Image source={require("../Icon/voucher.png")} />
              <Text className="text-[#1c1c1c] text-[12px] w-full text-center pt-2">
                Mã giảm giá
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  boxshadow: {
    shadowColor: "#000000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },

  border: {
    borderColor: "#1c1c1c",
    borderWidth: 2,
    borderRadius: 20,
  },
  stretch: {
    width: "100%",
    height: 175,
    borderRadius: 20,
    resizeMode: "stretch",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "stretch",
  },
});

export default Home;
