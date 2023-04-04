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
import GRAFICO from "../components/GRAFICO";
import DOLARPrice from "../components/DOLARPrice";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HOME = () => {
  return (
    <View style={styles.home}>
      <MenuContainer />
      <GRAFICO />
      <DOLARPrice />
      <Text style={styles.dolarLabel}>DÓLAR AGORA!</Text>
      <Image
        style={[styles.dolarIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/dolaricon.png")}
      />
      <Image
        style={[styles.userButtonIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/userbuttom.png")}
      />
      <Text style={[styles.nomeLabel, styles.labelTypo]}>Maria!</Text>
      <Text style={[styles.boasvindasLabel, styles.labelTypo]}>Bem-vinda,</Text>
      <StatusBar
        barStyle="default"
        translucent={true}
        backgroundColor="#16171d"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    color: Color.neutral5,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    lineHeight: 37,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    position: "absolute",
  },
  dolarLabel: {
    height: "2.34%",
    width: "28%",
    top: "32.27%",
    left: "17.6%",
    fontSize: FontSize.label1_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.label1,
    color: Color.secundary,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    position: "absolute",
  },
  dolarIcon: {
    height: "2.96%",
    width: "6.4%",
    top: "32.02%",
    right: "85.87%",
    bottom: "65.02%",
    left: "7.73%",
  },
  userButtonIcon: {
    height: "4.93%",
    width: "10.67%",
    top: "16.13%",
    right: "8%",
    bottom: "78.94%",
    left: "81.33%",
  },
  nomeLabel: {
    top: "19.58%",
    left: "8.8%",
  },
  boasvindasLabel: {
    top: "15.02%",
    left: "8.27%",
  },
  home: {
    backgroundColor: Color.neutral1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default HOME;
