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
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Conta = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.conta}>
      <View style={[styles.musarSenha, styles.nomePosition]}>
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/iconarrow1.png")}
        />
        <Text style={styles.musarSenha1}>Mudar Senha</Text>
      </View>
      <View style={[styles.nome, styles.nomePosition]}>
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/iconarrow1.png")}
        />
        <Text style={[styles.nomeOutput, styles.outputTypo]}>Maria Silva</Text>
        <Text style={styles.musarSenha1}>Nome</Text>
      </View>
      <View style={[styles.email, styles.nomePosition]}>
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/iconarrow1.png")}
        />
        <Text style={[styles.emailOutput, styles.outputTypo]}>
          maria.silva@gmail.com
        </Text>
        <Text style={styles.musarSenha1}>Email</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={[styles.minhaContaTitle, styles.maisButtonPosition]}>
          Minha Conta
        </Text>
        <Pressable
          style={styles.voltarButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/voltarbuttom.png")}
          />
        </Pressable>
        <StatusBar
          style={styles.headerPosition}
          barStyle="default"
          translucent={true}
          backgroundColor="#16171d"
        />
      </View>
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
          style={[styles.maisButton, styles.maisButtonPosition]}
          onPress={() => navigation.navigate("CriarAlerta")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/mais-buttom.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nomePosition: {
    left: "8.53%",
    right: "8%",
    width: "83.47%",
    height: "5.54%",
    position: "absolute",
  },
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  outputTypo: {
    textAlign: "right",
    color: Color.neutral3,
    fontFamily: FontFamily.body2Regular,
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
    top: "0%",
    position: "absolute",
  },
  headerPosition: {
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  maisButtonPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
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
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.caption1Medium_size,
    bottom: 0,
    left: "50%",
    color: Color.neutral3,
    textAlign: "left",
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
    height: "2.22%",
    width: "100.32%",
    top: "98.89%",
    right: "-0.16%",
    bottom: "-1.11%",
    left: "-0.16%",
    borderStyle: "solid",
    borderColor: "#21242d",
    borderTopWidth: 1,
    position: "absolute",
  },
  iconArrow: {
    height: "22.26%",
    width: "1.98%",
    top: "13.33%",
    right: "0.26%",
    bottom: "64.41%",
    left: "97.76%",
    position: "absolute",
  },
  musarSenha1: {
    left: "0%",
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
    color: Color.neutral5,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    top: "0%",
    position: "absolute",
  },
  musarSenha: {
    top: "26.72%",
    bottom: "67.73%",
  },
  nomeOutput: {
    left: "67.73%",
  },
  nome: {
    top: "17.73%",
    bottom: "76.72%",
  },
  emailOutput: {
    left: "38.98%",
  },
  email: {
    top: "35.71%",
    bottom: "58.74%",
  },
  minhaContaTitle: {
    marginLeft: -59.5,
    top: "68%",
    fontSize: FontSize.title3SemiBold_size,
    lineHeight: 24,
    textAlign: "center",
    color: Color.neutral5,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    left: "50%",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  voltarButton: {
    left: "8.33%",
    top: "75%",
    right: "86.73%",
    bottom: "6.81%",
    width: "4.93%",
    height: "18.19%",
    position: "absolute",
  },
  header: {
    height: "9.24%",
    bottom: "90.76%",
    top: "0%",
    width: 375,
  },
  menuBackgoundIcon: {
    height: 96,
    marginLeft: -187.5,
    width: 455,
    bottom: 0,
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
  icon1: {
    marginLeft: -25.5,
  },
  maisButton: {
    bottom: 70,
    width: 52,
    height: 52,
  },
  menu: {
    marginLeft: -227.5,
    height: 122,
  },
  conta: {
    backgroundColor: Color.neutral1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Conta;
