import { Stack } from "expo-router";
import {View} from "react-native";

export default function RootLayout() {
  return(
  <View style = {{ padding:20, backgroundColor: 'black', flex: 1}}>
   <Stack />;
  </View>
  )
}