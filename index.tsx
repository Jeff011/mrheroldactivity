import { router } from 'expo-router';
import { Button, View } from 'react-native';

export default function Index() {

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Button title="Jeff L. Precolles" onPress={function () {
        router.push({ 
          pathname: "/lesson1", 
          params: { 
            name: "Jeff L. Precolles",
            id: "From lessons 1 to 6, I learned a complete and step-by-step approach to creating mobile applications using React Native and Expo.Lesson 1 introduced me to React Native as a powerful open-source framework created by Meta that allows us to build real native mobile applications for both iOS and Android using JavaScript and React, while also explaining the differences between native, hybrid, and cross-platform architectures, alongside the performance boost of the newer JSI-based architecture over older JSON bridges.Lesson 2 taught me how to set up my workspace and prepare my computer by installing prerequisites like Node.js, setting up an Expo project, managing folder structures, and launching a local development server to test mobile applications.Lesson 3 moved us into creating dynamic and interactive user interfaces by introducing the useState hook, explaining how state management triggers screen re-renders when data changes, and showing how to use event handlers with elements like TextInput and buttons.Lesson 4 focused on screen layout and design principles, helping me understand how to structure responsive components neatly using clean design techniques.Lesson 5 taught me how to use Expo Router to move data seamlessly between different screens in an app, covering how to pass query parameters using Link or router.push, read those parameters with useLocalSearchParams(), and use ternary operators to handle conditional views and missing data.Finally, Lesson 6 taught me how components handle side effects using the useEffect hook, how dependency arrays control when code runs, and how mobile apps securely fetch, parse, and display real-world data from backend servers using REST APIs and structured JSON responses." 
          } 
        }) 
      }} />
      
      <Button title="Andre Montecillo Sysip" onPress={function () {
        router.push({ 
          pathname: "/lesson1", 
          params: { 
            name: "Andre Montecillo Sysip",
            id: "" 
          } 
        })
      }} />

      <Button title="Jexie Casino" onPress={function () {
        router.push({ 
          pathname: "/lesson1", 
          params: { 
            name: "Jexie Casino",
            id: "" 
          } 
        })
      }} />

      <Button title="Ronit Manatad" onPress={function () {
        router.push({ 
          pathname: "/lesson1", 
          params: { 
            name: "Ronit Manatad",
            id: "" 
          } 
        })
      }} />

      <Button title="Ovaldo Panot" onPress={function () {
        router.push({ 
          pathname: "/lesson1", 
          params: { 
            name: "Ovaldo Panot",
            id: "Lesson 1: Introduction to React Native and Expo. Insight: I discovered that with React Native, we can build both Android and iOS applications using only JavaScript and React. I found out that Expo simplifies the process by offering ready-to-use tools for testing and building. I also understood the difference between native, hybrid, and cross-platform development.Lesson 2: React Native and Expo Setup*Insight: I understood the importance of installing development tools like http://Node.js, VS Code, and the Expo Go app. I learned the steps on how to initialize a new project, run the development server, and familiarize myself with the folder structure.Lesson 3: User Inputs and Interactive State*Insight: I realized how a static UI is different from a dynamic one. I learned how useState is used to hold data and automatically re-render the UI when that data changes, which is useful for features like buttons, inputs, and counters.Lesson 4: Navigation with Expo Router*Insight: I learned that Expo Router is used to handle screen transitions. It uses a file-based system where folders become routes, making it easier to go forward to a new screen or go back.Lesson 5: Moving Data Between Screens*Insight: I learned how to transfer information from one page to another using parameters. This is important so that when a user clicks an item, the next screen can show the specific details of that item.Lesson 6: Component Lifecycle and API Theory*Insight: I learned that an application can connect to the outside world through an API to fetch live data. I also learned that useEffect controls when a certain code should run, like fetching data when the screen first loads." 
          } 
        })
      }} />

      <Button title="Donalyn Juban" onPress={function () {
        router.push({ 
          pathname: "/lesson1", 
          params: { 
            name: "Donalyn Juban",
            id: "" 
          } 
        })
      }} />
    </View>
  );
}