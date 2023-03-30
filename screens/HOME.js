import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
} from "react-native";
import MenuContainer from "../components/MenuContainer";
import GRAFICO from "../components/GRAFICO";
import DOLARPrice from "../components/DOLARPrice";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HOME = () => {
  return (
    <View style={styles.home}>
      <MenuContainer />
      <GRAFICO />
      <View style={styles.dolarAgora}>
        <Image
          style={styles.dolarIcon}
          resizeMode="cover"
          source={require("../assets/dolaricon.png")}
        />
        <Text style={styles.dolarText}>DÓLAR AGORA!</Text>
        <DOLARPrice />
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={styles.boasvindas}>Bem-vinda,Maria!</Text>
        <Image
          style={styles.userButtomIcon}
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
  headerPosition: {
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  dolarIcon: {
    width: 24,
    height: 24,
  },
  dolarText: {
    fontSize: FontSize.body2SemiBold_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.body2SemiBold,
    color: Color.secundary,
    display: "flex",
    width: 105,
    height: 19,
    marginTop: 13,
    textAlign: "left",
    alignItems: "center",
  },
  dolarAgora: {
    top: 262,
    paddingHorizontal: 29,
    paddingVertical: 0,
    alignItems: "center",
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
    fontWeight: "600",
    fontFamily: FontFamily.title3SemiBold,
    color: Color.neutral5,
    textAlign: "left",
    position: "absolute",
  },
  userButtomIcon: {
    height: "19.32%",
    top: "64.73%",
    right: 30,
    bottom: "15.94%",
    maxHeight: "100%",
    width: 40,
    position: "absolute",
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
