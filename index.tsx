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
            id: "Lesson 1: Introduction to React Native and Expo Insight:I learned that React Native helps developers create mobile applications for Android and iOS using JavaScript and React. I also learned that Expo makes app development easier because it provides tools that help us build and test applications. There are different types of app architectures, such as native, hybrid, and cross-platform. I realized that React Native and Expo are useful because they can make mobile app development faster and easier. Lesson 2: React Native and Expo Setup Insight:I learned how to prepare the tools needed to create a mobile application. We need Node.js, a code editor like VS Code, and the Expo Go application to run and test our project. I also learned how to create a project, start the development server, and understand the basic project structure. This lesson helped me understand that setting up the right tools is the first step in developing an application. Lesson 3: User Inputs and Interactive State Insight:I learned the difference between static and dynamic user interfaces. A static interface does not change much, while a dynamic interface can respond to user actions. I also learned about the useState hook, which allows an application to remember information and update the screen when the information changes. I realized that useState is important for creating interactive applications, such as forms, counters, and login screens. Lesson 4: Navigation with Expo Router Insight:I learned that navigation helps users move from one screen to another in an app. For example, we can go from the home screen to the details screen and press the back button to return. Expo Router makes moving between screens easier. I realized that an app should be easy to use so users will not get confused. Lesson 5: Moving Data Between ScreensInsight:I learned that one screen can send information to another screen. For example, when we click a task, the next screen shows the details of the task we selected. This helps the app show the correct information. I realized that screens need to share data so the app can work properly.  Lesson 6: Component Lifecycle and API TheoryInsight:I learned that an app can get information from a server using an API. For example, a weather app gets weather updates and shows them on the screen. I also learned that useEffect() helps run certain tasks in an app. I realized that these things help make an app more useful and updated." 
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