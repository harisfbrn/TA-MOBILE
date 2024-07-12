import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";


const Checkin = ({navigation}) => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();

    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const formattedTime = `${hours}:${minutes}`;

    const daysOfWeek = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const monthsOfYear = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate();
    const month = monthsOfYear[now.getMonth()];
    const year = now.getFullYear();
    const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`;

    setCurrentTime(formattedTime);
    setCurrentDate(formattedDate);
  }, []);

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
      <View>
        <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "600" }}>
          Welcome!
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 30,
          gap: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            padding: 20,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "#846AAD" }}>212310013 Mochammad Haris Febrian</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Text style={{ paddingBottom: 10 }}>Pemrograman Web</Text>
          <Text style={{ borderTopWidth: 1, paddingTop: 10 }}>
            Febri Damatraseta Fairuz S.T, M.Kom
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20 }}>Jam kehadiran: {currentTime}</Text>
          <Text>{currentDate}</Text>
        </View>
      </View>
      <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Logout")}
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
          Next
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkin;
