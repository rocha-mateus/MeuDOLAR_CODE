const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import VENDER from "./screens/VENDER";
import LogIn from "./screens/LogIn";
import HOME from "./screens/HOME";
import CRIARALERTA from "./screens/CRIARALERTA";
import EDITARALERTA from "./screens/EDITARALERTA";
import ALERTAS from "./screens/ALERTAS";
import COMPRAR from "./screens/COMPRAR";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="HOME"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="VENDER"
              component={VENDER}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HOME"
              component={HOME}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CRIARALERTA"
              component={CRIARALERTA}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EDITARALERTA"
              component={EDITARALERTA}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ALERTAS"
              component={ALERTAS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="COMPRAR"
              component={COMPRAR}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
