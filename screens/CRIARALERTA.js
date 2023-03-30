import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  StatusBar,
} from "react-native";
import { Switch as RNPSwitch } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const CRIARALERTA = () => {
  const [switchOffValue, setSwitchOffValue] = useState(false);
  const [switchOnValue, setSwitchOnValue] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.criarAlerta}>
      <View style={[styles.button, styles.buttonPosition]}>
        <Text style={styles.button1}>Salvar</Text>
      </View>
      <View style={[styles.cardVector, styles.buttonPosition]} />
      <RNPSwitch
        style={[styles.switchOff, styles.switchPosition]}
        disabled
        value={switchOffValue}
        onValueChange={setSwitchOffValue}
        color="#a7aebf"
      />
      <Text style={[styles.menor, styles.menorTypo]}>Menor do que R$5,19</Text>
      <Image
        style={[styles.upDownIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/updown.png")}
      />
      <Image
        style={styles.divisorIcon}
        resizeMode="cover"
        source={require("../assets/divisor.png")}
      />
      <RNPSwitch
        style={[styles.switchOn, styles.switchPosition]}
        value={switchOnValue}
        onValueChange={setSwitchOnValue}
        color="#00ff5f"
      />
      <Text style={[styles.maior, styles.menorTypo]}>Maior do que R$5,19</Text>
      <Image
        style={[styles.upIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/upicon.png")}
      />
      <TextInput
        style={styles.dolarPrice}
        placeholder="$0,00"
        keyboardType="number-pad"
      />
      <Text style={[styles.brlText, styles.textTypo3]}>BRL</Text>
      <Text style={[styles.realText, styles.textTypo]}>Real</Text>
      <Image
        style={[styles.realIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/realicon.png")}
      />
      <Image
        style={[styles.retornoVectorIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/retornovector.png")}
      />
      <Text style={[styles.usdText, styles.textTypo3]}>USD</Text>
      <Text style={[styles.dolarText, styles.textTypo]}>Dólar</Text>
      <Image
        style={[styles.dolarIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/realicon.png")}
      />
      <Text style={[styles.adicionaralertaTitle, styles.textTypo]}>
        Adicionar Alerta
      </Text>
      <Pressable
        style={styles.voltarButtom}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
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
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    width: 316,
    left: 30,
    position: "absolute",
  },
  switchPosition: {
    left: "75.73%",
    right: "13.6%",
    width: "10.67%",
    height: "2.71%",
    position: "absolute",
  },
  menorTypo: {
    color: Color.neutral5,
    lineHeight: 20,
    fontSize: FontSize.body2SemiBold_size,
    left: 84,
    textAlign: "left",
    fontFamily: FontFamily.body2SemiBold,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo3: {
    textAlign: "center",
    color: Color.secundary,
    top: "30.67%",
    lineHeight: 20,
    fontSize: FontSize.body2SemiBold_size,
    fontFamily: FontFamily.body2SemiBold,
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.neutral5,
    lineHeight: 24,
    position: "absolute",
  },
  iconLayout: {
    width: 60,
    bottom: "75.62%",
    top: "17%",
    height: "7.39%",
    maxHeight: "100%",
    position: "absolute",
  },
  button1: {
    color: Color.neutral,
    textAlign: "left",
    fontFamily: FontFamily.body2SemiBold,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.title3SemiBold_size,
  },
  button: {
    top: 569,
    borderRadius: 12,
    backgroundColor: Color.primary,
    height: 48,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  cardVector: {
    top: 417,
    borderRadius: 20,
    backgroundColor: Color.background2,
    height: 110,
  },
  switchOff: {
    top: "60.1%",
    bottom: "37.19%",
  },
  menor: {
    top: 490,
  },
  upDownIcon: {
    height: "2.52%",
    width: "7.81%",
    top: "60.87%",
    right: "79.59%",
    bottom: "36.61%",
    left: "12.6%",
    position: "absolute",
  },
  divisorIcon: {
    top: 472,
    left: 50,
    width: 274,
    height: 1,
    position: "absolute",
  },
  switchOn: {
    top: "54.19%",
    bottom: "43.1%",
  },
  maior: {
    top: 434,
  },
  upIcon: {
    height: "1.54%",
    width: "5.68%",
    top: "53.97%",
    right: "80.65%",
    bottom: "44.49%",
    left: "13.67%",
    position: "absolute",
  },
  dolarPrice: {
    height: "8.13%",
    top: "36.58%",
    left: 74,
    position: "absolute",
  },
  brlText: {
    left: 256,
  },
  realText: {
    left: 241,
    fontSize: FontSize.size_5xl,
    top: 218,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
  },
  realIcon: {
    left: 238,
  },
  retornoVectorIcon: {
    width: "6.2%",
    top: "23.03%",
    right: "44.63%",
    bottom: "74.26%",
    left: "49.17%",
    height: "2.71%",
    maxWidth: "100%",
    position: "absolute",
  },
  usdText: {
    left: 97,
  },
  dolarText: {
    left: 78,
    fontSize: FontSize.size_5xl,
    top: 218,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
  },
  dolarIcon: {
    left: 81,
  },
  adicionaralertaTitle: {
    top: 51,
    left: 113,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    fontSize: FontSize.title3SemiBold_size,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  voltarButtom: {
    left: "8.33%",
    top: "6.93%",
    right: "86.73%",
    bottom: "91.39%",
    width: "4.93%",
    height: "1.68%",
    position: "absolute",
  },
  criarAlerta: {
    backgroundColor: Color.neutral,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CRIARALERTA;
