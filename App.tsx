import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { NotWorkingScreen } from "./screens/not-working-screen";
import { WorkingScreen } from "./screens/working-screen";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        // @ts-ignore
        onPress={() => navigation.navigate("Working")}
        title="Go to Working Screen"
      />
      <Button
        // @ts-ignore
        onPress={() => navigation.navigate("NotWorking")}
        title="Go to Not Working Screen"
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Working"
          options={{
            headerStyle: {
              backgroundColor: "#edf6ff",
            },
          }}
          component={WorkingScreen}
        />
        <Stack.Screen
          name="NotWorking"
          options={{
            headerBackground: () => (
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  backgroundColor: "#edf6ff",
                }}
              />
            ),
          }}
          component={NotWorkingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
