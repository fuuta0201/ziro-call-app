import React from "react";
import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

const details = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go back"
        onPress={() => {
          router.back();
        }}
      />
    </View>
  );
};

export default details;
