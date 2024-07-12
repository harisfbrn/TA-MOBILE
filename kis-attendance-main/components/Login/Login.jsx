import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 50,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View>
        <Image source={require("../../assets/img/logo_kis.png")} />
      </View>
      <View>
        <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "500" }}>
          Welcome!
        </Text>
      </View>

      <View style={{ gap: 8 }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: 400 }}>
            Already have an account?
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.icon}>
            <FontAwesome5 name="user" size={20} color={"#D9D9D9"} />
          </View>
          <TextInput
            style={{
              ...styles.input,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            }}
            placeholder="Username/NPM"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.icon}>
            <FontAwesome5 name="key" size={20} color={"#D9D9D9"} />
          </View>
          <TextInput
            style={{
              ...styles.input,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            }}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Navigasi")}
      >
        <Text
          style={{
            color: "#846AAD",
            fontWeight: 600,
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Log In
        </Text>
      </TouchableOpacity>

      <View style={{ alignSelf: 'flex-start', paddingStart: 30, marginTop: -30 }}>
        <Text style={{ color: "#4493DB" }}>Any Problems?</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRight: 0,
    borderBottomRight: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  input: {
    borderWidth: 1,
    borderLeftWidth: 0,
    width: 260,
    height: 50,
  },
  button: {
    backgroundColor: "white",
    width: 310,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 20,
  },
});

export default Login;
