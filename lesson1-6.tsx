import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Details() {

  const { id, name } = useLocalSearchParams();

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>
        {id ? id : "ERROR"}
      </Text>
    </View>
  );
}