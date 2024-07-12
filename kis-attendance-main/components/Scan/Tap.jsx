import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Tap = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Image source={require("../../assets/img/logo_kis.png")} />
      </View>
      <Image source={require("../../assets/img/scan.png")} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Scan")}
        style={{
          backgroundColor: "#D9D9D9",
          paddingHorizontal: 40,
          paddingVertical: 15,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontWeight: 600,
            fontSize: 15,
            textAlign: "center",
          }}
        >
          Tap To Scan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tap;
