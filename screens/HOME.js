import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  StatusBar,
} from "react-native";
import MenuContainer from "../components/MenuContainer";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HOME = () => {
  return (
    <View style={styles.home}>
      <MenuContainer />
      <View style={styles.dolarAgora}>
        <Text style={[styles.dolarPrice, styles.dolarFlexBox]}>$5,29</Text>
        <Text style={[styles.dolarText, styles.dolarFlexBox]}>
          DÓLAR AGORA!
        </Text>
        <Image
          style={[styles.dolarIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/dolaricon.png")}
        />
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={styles.boasvindas}>Bem-vinda,Maria!</Text>
        <Image
          style={[styles.userButtomIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/userbuttom.png")}
        />
        <StatusBar
          style={styles.headerPosition}
          barStyle="default"
          translucent={true}
          backgroundColor="#16171d"
        />
      </View>
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
  headerPosition: {
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  dolarPrice: {
    height: "39.29%",
    top: "60.71%",
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
    height: "16.96%",
    top: "2.68%",
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
    height: "21.43%",
    top: "0%",
    bottom: "78.57%",
    left: 31,
    width: 24,
  },
  dolarAgora: {
    top: 262,
    height: 112,
    width: 375,
    left: 0,
    position: "absolute",
  },
  boasvindas: {
    marginTop: 29.5,
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
    height: "19.32%",
    top: "64.73%",
    right: 30,
    bottom: "15.94%",
    width: 40,
  },
  header: {
    height: 207,
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
