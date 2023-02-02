import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-purple-700">
      <StatusBar style="auto" />
      <Text className="text-lg font-bold">Open aaa working on your app!</Text>
    </View>
  );
}
