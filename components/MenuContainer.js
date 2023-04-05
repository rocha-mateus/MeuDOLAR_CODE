import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MenuContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.menu, styles.menuPosition]}>
      <Image
        style={[styles.menuBackgoundIcon, styles.menuPosition]}
        resizeMode="cover"
        source={require("../assets/menubackgound.png")}
      />
      <Pressable
        style={[styles.venderButton, styles.buttonPosition]}
        onPress={() => navigation.navigate("Vender")}
      >
        <Image
          style={[styles.venderVector03Icon, styles.venderIconLayout]}
          resizeMode="cover"
          source={require("../assets/vendervector03.png")}
        />
        <Image
          style={[styles.venderVector02Icon, styles.venderIconLayout]}
          resizeMode="cover"
          source={require("../assets/vendervector02.png")}
        />
        <Image
          style={[styles.venderVector01Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vendervector01.png")}
        />
        <Text style={[styles.venderLabel, styles.labelTypo]}>Vender</Text>
      </Pressable>
      <Pressable
        style={[styles.comprarButtom, styles.buttonPosition]}
        onPress={() => navigation.navigate("Comprar")}
      >
        <Image
          style={[styles.comprarVector04Icon, styles.comprarIconLayout]}
          resizeMode="cover"
          source={require("../assets/comprarvector04.png")}
        />
        <Image
          style={[styles.comprarVector03Icon, styles.comprarIconLayout]}
          resizeMode="cover"
          source={require("../assets/comprarvector03.png")}
        />
        <Image
          style={[styles.comprarVector02Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/comprarvector02.png")}
        />
        <Image
          style={[styles.comprarVector01Icon, styles.venderIconLayout]}
          resizeMode="cover"
          source={require("../assets/comprarvector01.png")}
        />
        <Text style={[styles.comprarLabel, styles.labelTypo]}>Comprar</Text>
      </Pressable>
      <Pressable
        style={[styles.alertasButton, styles.buttonPosition]}
        onPress={() => navigation.navigate("Alertas")}
      >
        <Image
          style={[styles.alertasVector02Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/alertasvector02.png")}
        />
        <Image
          style={[styles.alertasVector01Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/alertasvector01.png")}
        />
        <Text style={[styles.alertasLabel, styles.labelTypo]}>Alertas</Text>
      </Pressable>
      <Pressable style={[styles.homeButton, styles.buttonPosition]}>
        <Image
          style={[styles.homeVector03Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/homevector03.png")}
        />
        <Image
          style={[styles.homeVector02Icon, styles.homeIconPosition]}
          resizeMode="cover"
          source={require("../assets/homevector02.png")}
        />
        <Image
          style={[styles.homeVector01Icon, styles.homeIconPosition]}
          resizeMode="cover"
          source={require("../assets/homevector01.png")}
        />
        <Text style={[styles.homeLabel, styles.labelTypo]}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.maisButton}
        onPress={() => navigation.navigate("CriarAlerta")}
      >
        <Image
          style={styles.icon}
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
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  buttonPosition: {
    height: 44,
    bottom: 28,
    position: "absolute",
  },
  venderIconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout1: {
    height: 22,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  labelTypo: {
    textAlign: "left",
    color: Color.neutral3,
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.caption1Medium_size,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  comprarIconLayout: {
    height: 5,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout: {
    height: 6,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  homeIconPosition: {
    right: "33.51%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  menuBackgoundIcon: {
    marginLeft: -187.5,
    height: 96,
  },
  venderVector03Icon: {
    width: "23.86%",
    left: "39.2%",
    height: 7,
    bottom: 31,
    right: "36.93%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  venderVector02Icon: {
    width: "7.95%",
    bottom: 34,
    left: "55.11%",
    height: 4,
    right: "36.93%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  venderVector01Icon: {
    width: "48.86%",
    right: "24.43%",
    left: "26.7%",
    bottom: 23,
  },
  venderLabel: {
    marginLeft: -22,
  },
  venderButton: {
    width: "9.67%",
    right: "13.08%",
    left: "77.25%",
  },
  comprarVector04Icon: {
    width: "11.36%",
    right: "43.42%",
    left: "45.22%",
    bottom: 28,
  },
  comprarVector03Icon: {
    width: "27.49%",
    right: "35.35%",
    bottom: 40,
    left: "37.16%",
  },
  comprarVector02Icon: {
    width: "39.09%",
    right: "29.55%",
    bottom: 35,
    left: "31.36%",
  },
  comprarVector01Icon: {
    width: "33.64%",
    right: "32.27%",
    left: "34.09%",
    height: 14,
    bottom: 23,
  },
  comprarLabel: {
    marginLeft: -27.5,
  },
  comprarButtom: {
    width: "12.09%",
    right: "28.35%",
    left: "59.56%",
  },
  alertasVector02Icon: {
    width: "45.35%",
    right: "29.75%",
    left: "24.9%",
    bottom: 23,
  },
  alertasVector01Icon: {
    width: "16.74%",
    right: "43.24%",
    bottom: 32,
    left: "40.01%",
  },
  alertasLabel: {
    marginLeft: -21.5,
  },
  alertasButton: {
    width: "9.45%",
    right: "60%",
    left: "30.55%",
  },
  homeVector03Icon: {
    width: "62.04%",
    right: "17.59%",
    bottom: 22,
    left: "20.37%",
  },
  homeVector02Icon: {
    width: "30.21%",
    left: "36.28%",
    height: 7,
    bottom: 28,
  },
  homeVector01Icon: {
    width: "9.95%",
    left: "56.54%",
    height: 4,
    bottom: 31,
  },
  homeLabel: {
    marginLeft: -18,
  },
  homeButton: {
    width: "7.91%",
    right: "78.68%",
    left: "13.41%",
  },
  icon: {
    marginLeft: -25.5,
    width: "100%",
    height: "100%",
  },
  maisButton: {
    bottom: 70,
    width: 52,
    height: 52,
    left: "50%",
    position: "absolute",
  },
  menu: {
    marginLeft: -227.5,
    height: 122,
  },
});

export default MenuContainer;
