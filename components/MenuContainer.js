import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MenuContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.menu, styles.menuPosition]}>
      <Image
        style={[styles.baseMenuIcon, styles.menuPosition]}
        resizeMode="cover"
        source={require("../assets/basemenu.png")}
      />
      <Text style={[styles.venderText, styles.textTypo]}>Vender</Text>
      <Text style={[styles.comprarText, styles.textTypo]}>Comprar</Text>
      <Text style={[styles.alertasText, styles.textTypo]}>Alertas</Text>
      <Text style={[styles.homeText, styles.textTypo]}>Home</Text>
      <Image
        style={[styles.venderButtomIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/venderbuttom.png")}
      />
      <Image
        style={[styles.comprarButtomIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/comprarbuttom.png")}
      />
      <Image
        style={[styles.alertasButtomIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/alertasbuttom.png")}
      />
      <Image
        style={[styles.homeButtomIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/homebuttom.png")}
      />
      <Pressable
        style={styles.maisButtom}
        onPress={() => navigation.navigate("CRIARALERTA")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/mais-buttom.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  menuPosition: {
    width: 455,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.selection,
    fontFamily: FontFamily.body2SemiBold,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.caption1Medium_size,
    top: 78,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  baseMenuIcon: {
    marginLeft: -187.5,
    height: 96,
  },
  venderText: {
    left: 352,
  },
  comprarText: {
    left: 271,
  },
  alertasText: {
    left: 139,
  },
  homeText: {
    left: 61,
  },
  venderButtomIcon: {
    right: "15.44%",
    left: "79.84%",
    bottom: "42.01%",
    width: "4.73%",
    height: "17.62%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "40.37%",
    position: "absolute",
  },
  comprarButtomIcon: {
    right: "31.92%",
    left: "63.35%",
    bottom: "42.01%",
    width: "4.73%",
    height: "17.62%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "40.37%",
    position: "absolute",
  },
  alertasButtomIcon: {
    height: "18.22%",
    width: "4.29%",
    right: "62.81%",
    bottom: "41.41%",
    left: "32.9%",
    top: "40.37%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  homeButtomIcon: {
    height: "18.28%",
    width: "4.91%",
    right: "80.07%",
    bottom: "41.35%",
    left: "15.02%",
    top: "40.37%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  maisButtom: {
    left: "44.4%",
    top: "0%",
    right: "44.18%",
    bottom: "57.38%",
    width: "11.43%",
    height: "42.62%",
    position: "absolute",
  },
  menu: {
    marginLeft: -227.5,
    height: 122,
  },
});

export default MenuContainer;
