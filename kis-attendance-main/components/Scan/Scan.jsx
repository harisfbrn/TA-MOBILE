import { View, Text, StyleSheet, LogBox } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useFocusEffect } from '@react-navigation/native';

LogBox.ignoreAllLogs();

const Scan = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    navigation.navigate("Checkin");
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      setScanned(false); // Reset scanned state when screen is focused
    }, [])
  );

  if (hasPermission === null) {
    return <Text>Mengizinkan akses ke kamera</Text>;
  }

  if (hasPermission === false) {
    return <Text>Tidak memiliki izin akses ke kamera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      {scanned && (
        <View style={styles.scanOverlay}>
          <Text style={styles.scanOverlayText}>
            QR Code terdeteksi! Tunggu sebentar...
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  scanOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  scanOverlayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default Scan;
