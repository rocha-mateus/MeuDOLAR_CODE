import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
  View,
} from "react-native";
import MenuContainer from "../components/MenuContainer";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HOME = () => {
  return (
    <View style={styles.home}>
      <MenuContainer />
      <Text style={[styles.dolarPrice, styles.dolarFlexBox]}>$5,29</Text>
      <Text style={[styles.dolarText, styles.dolarFlexBox]}>DÓLAR AGORA!</Text>
      <Image
        style={[styles.dolarIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/dolaricon.png")}
      />
      <Text style={styles.boasvindas}>Bem-vinda,Maria!</Text>
      <Image
        style={[styles.userButtomIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/userbuttom.png")}
      />
      <StatusBar
        barStyle="default"
        translucent={true}
        backgroundColor="#16171d"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dolarFlexBox: {
    alignItems: "center",
    display: "flex",
    lineHeight: 20,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  dolarPrice: {
    height: "5.42%",
    top: "37.93%",
    left: 29,
    fontSize: 50,
    width: 150,
    color: Color.neutral5,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    display: "flex",
    lineHeight: 20,
  },
  dolarText: {
    height: "2.34%",
    top: "32.64%",
    left: 66,
    fontSize: FontSize.body2SemiBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.body2SemiBold,
    color: Color.secundary,
    width: 105,
    display: "flex",
    lineHeight: 20,
  },
  dolarIcon: {
    height: "2.96%",
    top: "32.27%",
    bottom: "64.78%",
    left: 31,
    width: 24,
  },
  boasvindas: {
    marginTop: -273,
    marginLeft: -158.5,
    top: "50%",
    left: "50%",
    fontSize: 32,
    lineHeight: 37,
    textAlign: "left",
    color: Color.neutral5,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  userButtomIcon: {
    height: "4.93%",
    top: "16.5%",
    right: 30,
    bottom: "78.57%",
    width: 40,
  },
  home: {
    backgroundColor: Color.neutral,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default HOME;
