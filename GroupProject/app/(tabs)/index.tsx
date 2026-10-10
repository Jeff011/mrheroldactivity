import { router } from 'expo-router';
import { Button, View } from 'react-native';

export default function Index() {

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Button title="Jeff L. Precolles" onPress={function () {
        router.push({ 
          pathname: "/lesson1-6", 
          params: { 
            name: "Jeff L. Precolles",
            id: "From lessons 1 to 6, I learned a complete and step-by-step approach to creating mobile applications using React Native and Expo.Lesson 1 introduced me to React Native as a powerful open-source framework created by Meta that allows us to build real native mobile applications for both iOS and Android using JavaScript and React, while also explaining the differences between native, hybrid, and cross-platform architectures, alongside the performance boost of the newer JSI-based architecture over older JSON bridges.Lesson 2 taught me how to set up my workspace and prepare my computer by installing prerequisites like Node.js, setting up an Expo project, managing folder structures, and launching a local development server to test mobile applications.Lesson 3 moved us into creating dynamic and interactive user interfaces by introducing the useState hook, explaining how state management triggers screen re-renders when data changes, and showing how to use event handlers with elements like TextInput and buttons.Lesson 4 focused on screen layout and design principles, helping me understand how to structure responsive components neatly using clean design techniques.Lesson 5 taught me how to use Expo Router to move data seamlessly between different screens in an app, covering how to pass query parameters using Link or router.push, read those parameters with useLocalSearchParams(), and use ternary operators to handle conditional views and missing data.Finally, Lesson 6 taught me how components handle side effects using the useEffect hook, how dependency arrays control when code runs, and how mobile apps securely fetch, parse, and display real-world data from backend servers using REST APIs and structured JSON responses." 
          } 
        }) 
      }} />
      
      <Button title="Andre Montecillo Sysip" onPress={function () {
        router.push({ 
          pathname: "/lesson1-6", 
          params: { 
            name: "Andre Montecillo Sysip",
            id: "" 
          } 
        })
      }} />

      <Button title="Jexie Casino" onPress={function () {
        router.push({ 
          pathname: "/lesson1-6", 
          params: { 
            name: "Jexie Casino",
            id: "" 
          } 
        })
      }} />

      <Button title="Ronit Manatad" onPress={function () {
        router.push({ 
          pathname: "/lesson1-6", 
          params: { 
            name: "Ronit Manatad",
            id: "" 
          } 
        })
      }} />

      <Button title="Ovaldo Panot" onPress={function () {
        router.push({ 
          pathname: "/lesson1-6", 
          params: { 
            name: "Ovaldo Panot",
            id: "" 
          } 
        })
      }} />

      <Button title="Donalyn Juban" onPress={function () {
        router.push({ 
          pathname: "/lesson1-6", 
          params: { 
            name: "Donalyn Juban",
            id: "" 
          } 
        })
      }} />
    </View>
  );
}