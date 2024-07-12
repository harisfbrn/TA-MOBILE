import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

const Logout = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View>
        <Image source={require("../../assets/img/logo_kis.png")} />
      </View>
      <View style={{ borderWidth: 1, padding: 70, borderRadius: 20 }}>
        <Text>Are you sure want to logout?</Text>
      </View>
      <View style={{ flexDirection: 'row', columnGap: 20  }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              fontWeight: 600,
              fontSize: 15,
              textAlign: "center",
            }}
          >
            Yes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text
            style={{
              color: '#846AAD',
              fontWeight: 600,
              fontSize: 15,
              textAlign: "center",
            }}
          >
            No
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
});

export default Logout;
