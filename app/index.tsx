import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Link href={"/details"} style={{ marginTop: 16 }}>
        Go to Details
      </Link>
    </View>
  );
}
