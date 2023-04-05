import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ALERTAS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.alertas}>
      <View style={[styles.alertaDown, styles.alertaPosition]}>
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/iconarrow1.png")}
        />
        <Text style={[styles.label, styles.labelFlexBox]}>R$ 5,19</Text>
        <Image
          style={[styles.upButtonIcon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/userbuttom1.png")}
        />
      </View>
      <Pressable
        style={[styles.alertaUp, styles.alertaPosition]}
        onPress={() => {}}
      >
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/iconarrow.png")}
        />
        <Text style={[styles.label, styles.labelFlexBox]}>R$ 5,19</Text>
        <Image
          style={[styles.upButtonIcon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/userbuttom2.png")}
        />
      </Pressable>
      <Text style={[styles.alertasHeader, styles.labelFlexBox]}>Alertas</Text>
      <StatusBar
        style={styles.statusBarPosition}
        barStyle="default"
        translucent={true}
        backgroundColor="#16171d"
      />
      <View style={styles.menu}>
        <Image
          style={styles.menuBackgoundIcon}
          resizeMode="cover"
          source={require("../assets/menubackgound.png")}
        />
        <Pressable
          style={[styles.venderButton, styles.buttonPosition]}
          onPress={() => navigation.navigate("Vender")}
        >
          <Image
            style={[styles.venderVector03Icon, styles.venderIconPosition]}
            resizeMode="cover"
            source={require("../assets/vendervector03.png")}
          />
          <Image
            style={[styles.venderVector02Icon, styles.venderIconPosition]}
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
            style={styles.comprarVector01Icon}
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
        <Pressable
          style={[styles.homeButton, styles.buttonPosition]}
          onPress={() => navigation.navigate("Home")}
        >
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
          style={[styles.maisButton, styles.statusBarPosition]}
          onPress={() => navigation.navigate("CriarAlerta")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/mais-buttom.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alertaPosition: {
    right: "7.73%",
    width: "84.27%",
    height: "6.71%",
    left: "8%",
    position: "absolute",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelFlexBox: {
    textAlign: "left",
    color: Color.neutral5,
    position: "absolute",
  },
  statusBarPosition: {
    left: "50%",
    position: "absolute",
  },
  buttonPosition: {
    height: 44,
    bottom: 28,
    position: "absolute",
  },
  venderIconPosition: {
    right: "36.93%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 22,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    color: Color.neutral3,
    lineHeight: 16,
    fontSize: FontSize.caption1Medium_size,
    bottom: 0,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    position: "absolute",
  },
  comprarIconLayout: {
    height: 5,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 6,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeIconPosition: {
    right: "33.51%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  divider: {
    height: "1.83%",
    width: "84.49%",
    top: "99.08%",
    right: "-0.16%",
    bottom: "-0.92%",
    left: "15.66%",
    borderStyle: "solid",
    borderColor: "#21242d",
    borderTopWidth: 1,
    position: "absolute",
  },
  iconArrow: {
    height: "18.38%",
    width: "1.96%",
    top: "27.52%",
    right: "0.26%",
    bottom: "54.1%",
    left: "97.78%",
  },
  label: {
    top: "18.35%",
    left: "18.67%",
    fontSize: FontSize.body2Regular_size,
    lineHeight: 20,
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    textAlign: "left",
    color: Color.neutral5,
  },
  upButtonIcon: {
    height: "73.39%",
    width: "12.66%",
    top: "0%",
    right: "87.34%",
    bottom: "26.61%",
    left: "0%",
  },
  alertaDown: {
    top: "20.44%",
    bottom: "72.84%",
    left: "8%",
  },
  alertaUp: {
    top: "29.13%",
    bottom: "64.16%",
    left: "8%",
  },
  alertasHeader: {
    top: "8.99%",
    fontSize: FontSize.size_13xl,
    lineHeight: 37,
    fontWeight: "600",
    fontFamily: FontFamily.title3SemiBold,
    left: "8%",
  },
  menuBackgoundIcon: {
    height: 96,
    bottom: 0,
    width: 455,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  venderVector03Icon: {
    width: "23.86%",
    left: "39.2%",
    height: 7,
    bottom: 31,
  },
  venderVector02Icon: {
    width: "7.95%",
    bottom: 34,
    left: "55.11%",
    height: 4,
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
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    height: "100%",
    width: "100%",
  },
  maisButton: {
    bottom: 70,
    width: 52,
    height: 52,
  },
  menu: {
    marginLeft: -227.5,
    bottom: 2,
    height: 122,
    width: 455,
    left: "50%",
    position: "absolute",
  },
  alertas: {
    backgroundColor: Color.neutral1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ALERTAS;
