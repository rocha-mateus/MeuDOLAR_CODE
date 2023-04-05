import React, { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  StatusBar,
} from "react-native";
import { Switch as RNPSwitch } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const CRIARALERTA = () => {
  const [switchOffValue, setSwitchOffValue] = useState(true);
  const [switchOnValue, setSwitchOnValue] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.criaralerta}>
      <Pressable
        style={styles.salvarButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.salvarLabel}>Salvar</Text>
      </Pressable>
      <View style={styles.card}>
        <RNPSwitch
          style={styles.switchOff}
          value={switchOffValue}
          onValueChange={setSwitchOffValue}
          color="#a7aebf"
        />
        <Text style={styles.menorLabel}>Menor do que R$5,19</Text>
        <Image
          style={styles.upDownIcon}
          resizeMode="cover"
          source={require("../assets/updown.png")}
        />
        <Image
          style={styles.divisorIcon}
          resizeMode="cover"
          source={require("../assets/divisor.png")}
        />
        <RNPSwitch
          style={styles.switchOn}
          value={switchOnValue}
          onValueChange={setSwitchOnValue}
          color="#00ff5f"
        />
        <Text style={styles.maiorLabel}>Maior do que R$5,19</Text>
        <Image
          style={styles.upIcon}
          resizeMode="cover"
          source={require("../assets/upicon.png")}
        />
      </View>
      <TextInput
        style={styles.dolarInput}
        placeholder="$0"
        keyboardType="default"
        placeholderTextColor="#fff"
      />
      <View style={styles.moedas}>
        <Text style={styles.brlLabel}>BRL</Text>
        <Text style={styles.realLabel}>Real</Text>
        <Image
          style={styles.realIcon}
          resizeMode="cover"
          source={require("../assets/realicon.png")}
        />
        <Image
          style={styles.retornoVectorIcon}
          resizeMode="cover"
          source={require("../assets/retornovector.png")}
        />
        <Text style={styles.usdLabel}>USD</Text>
        <Text style={styles.dolarLabel}>Dólar</Text>
        <Image
          style={styles.dolarIcon}
          resizeMode="cover"
          source={require("../assets/realicon.png")}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.adicionaralertaTitle}>Adicionar Alerta</Text>
        <Pressable
          style={styles.voltarButtom}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/voltarbuttom.png")}
          />
        </Pressable>
        <StatusBar
          barStyle="default"
          translucent={true}
          backgroundColor="#16171d"
        />
      </View>
      <View style={styles.menu}>
        <Image
          style={styles.menuBackgoundIcon}
          resizeMode="cover"
          source={require("../assets/menubackgound.png")}
        />
        <Pressable
          style={styles.venderButton}
          onPress={() => navigation.navigate("Vender")}
        >
          <Image
            style={styles.venderVector03Icon}
            resizeMode="cover"
            source={require("../assets/vendervector03.png")}
          />
          <Image
            style={styles.venderVector02Icon}
            resizeMode="cover"
            source={require("../assets/vendervector02.png")}
          />
          <Image
            style={styles.venderVector01Icon}
            resizeMode="cover"
            source={require("../assets/vendervector01.png")}
          />
          <Text style={styles.venderLabel}>Vender</Text>
        </Pressable>
        <Pressable
          style={styles.comprarButtom}
          onPress={() => navigation.navigate("Comprar")}
        >
          <Image
            style={styles.comprarVector04Icon}
            resizeMode="cover"
            source={require("../assets/comprarvector04.png")}
          />
          <Image
            style={styles.comprarVector03Icon}
            resizeMode="cover"
            source={require("../assets/comprarvector03.png")}
          />
          <Image
            style={styles.comprarVector02Icon}
            resizeMode="cover"
            source={require("../assets/comprarvector02.png")}
          />
          <Image
            style={styles.comprarVector01Icon}
            resizeMode="cover"
            source={require("../assets/comprarvector01.png")}
          />
          <Text style={styles.comprarLabel}>Comprar</Text>
        </Pressable>
        <Pressable
          style={styles.alertasButton}
          onPress={() => navigation.navigate("Alertas")}
        >
          <Image
            style={styles.alertasVector02Icon}
            resizeMode="cover"
            source={require("../assets/alertasvector02.png")}
          />
          <Image
            style={styles.alertasVector01Icon}
            resizeMode="cover"
            source={require("../assets/alertasvector01.png")}
          />
          <Text style={styles.alertasLabel}>Alertas</Text>
        </Pressable>
        <Pressable style={styles.homeButton}>
          <Image
            style={styles.homeVector03Icon}
            resizeMode="cover"
            source={require("../assets/homevector03.png")}
          />
          <Image
            style={styles.homeVector02Icon}
            resizeMode="cover"
            source={require("../assets/homevector02.png")}
          />
          <Image
            style={styles.homeVector01Icon}
            resizeMode="cover"
            source={require("../assets/homevector01.png")}
          />
          <Text style={styles.homeLabel}>Home</Text>
        </Pressable>
        <Pressable
          style={styles.maisButton}
          onPress={() => navigation.navigate("CriarAlerta")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/mais-buttom.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  salvarLabel: {
    position: "absolute",
    marginLeft: -29,
    top: "25%",
    left: "50%",
    fontSize: FontSize.title3SemiBold_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.label1,
    color: Color.neutral1,
    textAlign: "left",
  },
  salvarButton: {
    position: "absolute",
    height: "5.91%",
    marginLeft: -157.5,
    top: "65.39%",
    bottom: "28.69%",
    left: "50%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.primary,
    width: 316,
  },
  switchOff: {
    position: "absolute",
    height: "19.64%",
    width: "12.66%",
    top: "64.29%",
    right: "6.65%",
    bottom: "16.07%",
    left: "80.7%",
  },
  menorLabel: {
    position: "absolute",
    top: "66.07%",
    left: "17.41%",
    fontSize: FontSize.body2Regular_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.label1,
    color: Color.neutral5,
    textAlign: "left",
  },
  upDownIcon: {
    position: "absolute",
    height: "18.3%",
    width: "9.27%",
    top: "69.87%",
    right: "84.95%",
    bottom: "11.83%",
    left: "5.78%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  divisorIcon: {
    position: "absolute",
    height: "1.32%",
    marginLeft: -137,
    top: "49.55%",
    bottom: "49.13%",
    left: "50%",
    maxHeight: "100%",
    width: 274,
  },
  switchOn: {
    position: "absolute",
    height: "19.64%",
    width: "12.66%",
    top: "21.43%",
    right: "6.65%",
    bottom: "58.93%",
    left: "80.7%",
  },
  maiorLabel: {
    position: "absolute",
    top: "16.07%",
    left: "17.41%",
    fontSize: FontSize.body2Regular_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.label1,
    color: Color.neutral5,
    textAlign: "left",
  },
  upIcon: {
    position: "absolute",
    height: "11.16%",
    width: "6.74%",
    top: "19.87%",
    right: "86.22%",
    bottom: "68.97%",
    left: "7.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  card: {
    position: "absolute",
    height: "13.79%",
    marginLeft: -156.5,
    top: "48.28%",
    bottom: "37.93%",
    left: "50%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.background2,
    width: 316,
    overflow: "hidden",
  },
  dolarInput: {
    position: "absolute",
    height: "8.13%",
    marginLeft: -113.5,
    top: "36.58%",
    left: "50%",
    fontFamily: "Poppins",
    fontSize: 50,
  },
  brlLabel: {
    position: "absolute",
    top: "84.73%",
    left: "80.91%",
    fontSize: FontSize.body2Regular_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.label1,
    color: Color.neutral2,
    textAlign: "center",
  },
  realLabel: {
    position: "absolute",
    top: "61.07%",
    left: "74.09%",
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.title3SemiBold,
    color: Color.neutral5,
    textAlign: "center",
  },
  realIcon: {
    position: "absolute",
    height: "45.8%",
    width: "27.27%",
    top: "0%",
    right: "0%",
    bottom: "54.2%",
    left: "72.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  retornoVectorIcon: {
    position: "absolute",
    height: "16.81%",
    marginLeft: -3.63,
    top: "37.4%",
    bottom: "45.79%",
    left: "50%",
    maxHeight: "100%",
    width: 23,
  },
  usdLabel: {
    position: "absolute",
    top: "84.73%",
    left: "8.64%",
    fontSize: FontSize.body2Regular_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.label1,
    color: Color.neutral2,
    textAlign: "center",
  },
  dolarLabel: {
    position: "absolute",
    top: "61.07%",
    left: "0%",
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.title3SemiBold,
    color: Color.neutral5,
    textAlign: "center",
  },
  dolarIcon: {
    position: "absolute",
    height: "45.8%",
    width: "27.27%",
    top: "0%",
    right: "71.36%",
    bottom: "54.2%",
    left: "1.36%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  moedas: {
    position: "absolute",
    height: "16.13%",
    width: "58.67%",
    top: "17%",
    right: "20.53%",
    bottom: "66.87%",
    left: "20.8%",
  },
  adicionaralertaTitle: {
    position: "absolute",
    marginLeft: -74.5,
    top: "68%",
    left: "50%",
    fontSize: FontSize.title3SemiBold_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.title3SemiBold,
    color: Color.neutral5,
    textAlign: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  voltarButtom: {
    position: "absolute",
    left: "8.33%",
    top: "75%",
    right: "86.73%",
    bottom: "6.81%",
    width: "4.93%",
    height: "18.19%",
  },
  header: {
    position: "absolute",
    height: "9.24%",
    marginLeft: -187.5,
    top: "0%",
    bottom: "90.76%",
    left: "50%",
    width: 375,
  },
  menuBackgoundIcon: {
    position: "absolute",
    marginLeft: -187.5,
    bottom: 0,
    left: "50%",
    width: 455,
    height: 96,
  },
  venderVector03Icon: {
    position: "absolute",
    width: "23.86%",
    right: "36.93%",
    bottom: 31,
    left: "39.2%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 7,
  },
  venderVector02Icon: {
    position: "absolute",
    width: "7.95%",
    right: "36.93%",
    bottom: 34,
    left: "55.11%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 4,
  },
  venderVector01Icon: {
    position: "absolute",
    width: "48.86%",
    right: "24.43%",
    bottom: 23,
    left: "26.7%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 22,
  },
  venderLabel: {
    position: "absolute",
    marginLeft: -22,
    bottom: 0,
    left: "50%",
    fontSize: FontSize.caption1Medium_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.label1,
    color: Color.neutral3,
    textAlign: "left",
  },
  venderButton: {
    position: "absolute",
    width: "9.67%",
    right: "13.08%",
    bottom: 28,
    left: "77.25%",
    height: 44,
  },
  comprarVector04Icon: {
    position: "absolute",
    width: "11.36%",
    right: "43.42%",
    bottom: 28,
    left: "45.22%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 5,
  },
  comprarVector03Icon: {
    position: "absolute",
    width: "27.49%",
    right: "35.35%",
    bottom: 40,
    left: "37.16%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 5,
  },
  comprarVector02Icon: {
    position: "absolute",
    width: "39.09%",
    right: "29.55%",
    bottom: 35,
    left: "31.36%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 6,
  },
  comprarVector01Icon: {
    position: "absolute",
    width: "33.64%",
    right: "32.27%",
    bottom: 23,
    left: "34.09%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 14,
  },
  comprarLabel: {
    position: "absolute",
    marginLeft: -27.5,
    bottom: 0,
    left: "50%",
    fontSize: FontSize.caption1Medium_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.label1,
    color: Color.neutral3,
    textAlign: "left",
  },
  comprarButtom: {
    position: "absolute",
    width: "12.09%",
    right: "28.35%",
    bottom: 28,
    left: "59.56%",
    height: 44,
  },
  alertasVector02Icon: {
    position: "absolute",
    width: "45.35%",
    right: "29.75%",
    bottom: 23,
    left: "24.9%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 22,
  },
  alertasVector01Icon: {
    position: "absolute",
    width: "16.74%",
    right: "43.24%",
    bottom: 32,
    left: "40.01%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 6,
  },
  alertasLabel: {
    position: "absolute",
    marginLeft: -21.5,
    bottom: 0,
    left: "50%",
    fontSize: FontSize.caption1Medium_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.label1,
    color: Color.neutral3,
    textAlign: "left",
  },
  alertasButton: {
    position: "absolute",
    width: "9.45%",
    right: "60%",
    bottom: 28,
    left: "30.55%",
    height: 44,
  },
  homeVector03Icon: {
    position: "absolute",
    width: "62.04%",
    right: "17.59%",
    bottom: 22,
    left: "20.37%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 22,
  },
  homeVector02Icon: {
    position: "absolute",
    width: "30.21%",
    right: "33.51%",
    bottom: 28,
    left: "36.28%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 7,
  },
  homeVector01Icon: {
    position: "absolute",
    width: "9.95%",
    right: "33.51%",
    bottom: 31,
    left: "56.54%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 4,
  },
  homeLabel: {
    position: "absolute",
    marginLeft: -18,
    bottom: 0,
    left: "50%",
    fontSize: FontSize.caption1Medium_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.label1,
    color: Color.neutral3,
    textAlign: "left",
  },
  homeButton: {
    position: "absolute",
    width: "7.91%",
    right: "78.68%",
    bottom: 28,
    left: "13.41%",
    height: 44,
  },
  icon1: {
    marginLeft: -25.5,
    width: "100%",
    height: "100%",
  },
  maisButton: {
    position: "absolute",
    left: "50%",
    bottom: 70,
    width: 52,
    height: 52,
  },
  menu: {
    position: "absolute",
    marginLeft: -227.5,
    bottom: 0,
    left: "50%",
    width: 455,
    height: 122,
  },
  criaralerta: {
    position: "relative",
    backgroundColor: Color.neutral1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CRIARALERTA;
