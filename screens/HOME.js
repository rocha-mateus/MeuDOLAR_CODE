import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  StatusBar,
} from "react-native";
import MenuContainer from "../components/MenuContainer";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const HOME = () => {
  return (
    <View style={styles.home}>
      <MenuContainer />
      <View style={[styles.grafico, styles.graficoPosition]}>
        <View style={[styles.cardVector, styles.graficoPosition]} />
      </View>
      <View style={styles.dolarAgora}>
        <Image
          style={styles.dolarIcon}
          resizeMode="cover"
          source={require("../assets/dolaricon.png")}
        />
        <Text style={[styles.dolarText, styles.dolarSpaceBlock]}>
          DÓLAR AGORA!
        </Text>
        <Text style={[styles.dolarPrice, styles.dolarPriceTypo]}>$5,29</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={[styles.boasvindas, styles.dolarPriceTypo]}>
          Bem-vinda,Maria!
        </Text>
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
  graficoPosition: {
    width: 316,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  dolarSpaceBlock: {
    marginTop: 13,
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
  },
  dolarPriceTypo: {
    color: Color.neutral5,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  headerPosition: {
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  cardVector: {
    marginTop: -97.5,
    marginLeft: -158,
    borderRadius: Border.br_xl,
    backgroundColor: Color.background2,
    height: 195,
  },
  grafico: {
    marginTop: 44,
    height: 209,
    marginLeft: -158.5,
    width: 316,
  },
  dolarIcon: {
    width: 24,
    height: 24,
  },
  dolarText: {
    fontSize: FontSize.body2SemiBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.body2SemiBold,
    color: Color.secundary,
    width: 105,
    height: 19,
    textAlign: "left",
    marginTop: 13,
    display: "flex",
    lineHeight: 20,
  },
  dolarPrice: {
    fontSize: 50,
    width: 150,
    height: 44,
    marginTop: 13,
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
    color: Color.neutral5,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
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
    fontSize: 32,
    lineHeight: 37,
    color: Color.neutral5,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    marginLeft: -158.5,
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
