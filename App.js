const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LogIn from "./screens/LogIn";
import Recuperar from "./screens/Recuperar";
import Conta from "./screens/Conta";
import MudarSenha from "./screens/MudarSenha";
import Cadastrar from "./screens/Cadastrar";
import HOME from "./screens/HOME";
import CRIARALERTA from "./screens/CRIARALERTA";
import EDITARALERTA from "./screens/EDITARALERTA";
import ALERTAS from "./screens/ALERTAS";
import COMPRAR from "./screens/COMPRAR";
import VENDER from "./screens/VENDER";

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
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Login"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recuperar"
              component={Recuperar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Conta"
              component={Conta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MudarSenha"
              component={MudarSenha}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cadastrar"
              component={Cadastrar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={HOME}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CriarAlerta"
              component={CRIARALERTA}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditarAlerta"
              component={EDITARALERTA}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Alertas"
              component={ALERTAS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Comprar"
              component={COMPRAR}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vender"
              component={VENDER}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
