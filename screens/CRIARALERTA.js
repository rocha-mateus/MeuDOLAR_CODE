import React, { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  StatusBar,
} from "react-native";
import { Switch as RNPSwitch } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CRIARALERTA = () => {
  const [switchOffValue, setSwitchOffValue] = useState(true);
  const [switchOnValue, setSwitchOnValue] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.criarAlerta}>
      <View style={[styles.card, styles.cardLayout]}>
        <Pressable
          style={[styles.button, styles.cardLayout]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.button1}>Salvar</Text>
        </Pressable>
        <View style={[styles.cardVector, styles.headerPosition]} />
        <RNPSwitch
          style={[styles.switchOff, styles.switchPosition]}
          value={switchOffValue}
          onValueChange={setSwitchOffValue}
          color="#a7aebf"
        />
        <Text style={[styles.menor, styles.menorTypo]}>
          Menor do que R$5,19
        </Text>
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
        <Text style={[styles.maior, styles.menorTypo]}>
          Maior do que R$5,19
        </Text>
        <Image
          style={[styles.upIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/upicon.png")}
        />
      </View>
      <View style={[styles.price, styles.priceLayout]}>
        <TextInput
          style={[styles.dolarPrice, styles.dolarPricePosition]}
          placeholder="$0,00"
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.moedas}>
        <Text style={[styles.brlText, styles.textTypo4]}>BRL</Text>
        <Text style={[styles.realText, styles.textTypo1]}>Real</Text>
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
        <Text style={[styles.usdText, styles.textTypo4]}>USD</Text>
        <Text style={[styles.dolarText, styles.textTypo1]}>Dólar</Text>
        <Image
          style={[styles.dolarIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/realicon.png")}
        />
      </View>
      <View style={[styles.header, styles.priceLayout]}>
        <Text style={[styles.adicionaralertaTitle, styles.textTypo1]}>
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
          style={styles.priceLayout}
          barStyle="default"
          translucent={true}
          backgroundColor="#16171d"
        />
      </View>
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
          style={[styles.venderButtomIcon, styles.buttomIconLayout]}
          resizeMode="cover"
          source={require("../assets/venderbuttom.png")}
        />
        <Image
          style={[styles.comprarButtomIcon, styles.buttomIconLayout]}
          resizeMode="cover"
          source={require("../assets/comprarbuttom.png")}
        />
        <Image
          style={[styles.alertasButtomIcon, styles.buttomIconPosition]}
          resizeMode="cover"
          source={require("../assets/alertasbuttom.png")}
        />
        <Image
          style={[styles.homeButtomIcon, styles.buttomIconPosition]}
          resizeMode="cover"
          source={require("../assets/homebuttom.png")}
        />
        <Pressable
          style={[styles.maisButtom, styles.dolarPricePosition]}
          onPress={() => navigation.navigate("CRIARALERTA")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/mais-buttom.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    width: 316,
    position: "absolute",
  },
  headerPosition: {
    top: 0,
    left: 0,
  },
  switchPosition: {
    left: "80.38%",
    right: "6.96%",
    width: "12.66%",
    height: "11%",
    position: "absolute",
  },
  menorTypo: {
    color: Color.neutral5,
    lineHeight: 20,
    fontSize: FontSize.body2SemiBold_size,
    left: 54,
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
  priceLayout: {
    width: 375,
    position: "absolute",
  },
  dolarPricePosition: {
    top: "0%",
    position: "absolute",
  },
  textTypo4: {
    textAlign: "center",
    color: Color.secundary,
    top: "84.73%",
    lineHeight: 20,
    fontSize: FontSize.body2SemiBold_size,
    fontFamily: FontFamily.body2SemiBold,
    fontWeight: "500",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.neutral5,
    lineHeight: 24,
    position: "absolute",
  },
  iconLayout: {
    width: 60,
    bottom: "54.2%",
    height: "45.8%",
    top: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  menuPosition: {
    width: 455,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    color: Color.selection,
    lineHeight: 16,
    fontSize: FontSize.caption1Medium_size,
    top: 78,
    textAlign: "left",
    fontFamily: FontFamily.body2SemiBold,
    fontWeight: "500",
    position: "absolute",
  },
  buttomIconLayout: {
    bottom: "42.01%",
    width: "4.73%",
    height: "17.62%",
    top: "40.37%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttomIconPosition: {
    top: "40.37%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    top: 139,
    borderRadius: 12,
    backgroundColor: Color.primary,
    height: 48,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    left: 0,
  },
  cardVector: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.background2,
    height: 110,
    width: 316,
    position: "absolute",
  },
  switchOff: {
    top: "35.5%",
    bottom: "53.5%",
  },
  menor: {
    top: 73,
  },
  upDownIcon: {
    height: "10.25%",
    width: "9.27%",
    top: "38.63%",
    right: "85.27%",
    bottom: "51.13%",
    left: "5.46%",
    position: "absolute",
  },
  divisorIcon: {
    top: 55,
    left: 20,
    width: 274,
    height: 1,
    position: "absolute",
  },
  switchOn: {
    top: "11.5%",
    bottom: "77.5%",
  },
  maior: {
    top: 17,
  },
  upIcon: {
    height: "6.25%",
    width: "6.74%",
    top: "10.63%",
    right: "86.53%",
    bottom: "83.13%",
    left: "6.72%",
    position: "absolute",
  },
  card: {
    top: 392,
    left: 30,
    height: 200,
  },
  dolarPrice: {
    left: 74,
    height: "100%",
  },
  price: {
    marginTop: -109,
    marginLeft: -190.5,
    top: "50%",
    height: 66,
    left: "50%",
    width: 375,
  },
  brlText: {
    left: 178,
  },
  realText: {
    left: 163,
    fontSize: FontSize.size_5xl,
    top: 80,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
  },
  realIcon: {
    left: 160,
  },
  retornoVectorIcon: {
    height: "16.81%",
    width: "10.57%",
    top: "37.4%",
    right: "41.08%",
    bottom: "45.79%",
    left: "48.35%",
    position: "absolute",
  },
  usdText: {
    left: 19,
  },
  dolarText: {
    fontSize: FontSize.size_5xl,
    top: 80,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    left: 0,
  },
  dolarIcon: {
    left: 3,
  },
  moedas: {
    top: 138,
    left: 78,
    width: 220,
    height: 131,
    position: "absolute",
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
    top: "75%",
    right: "86.73%",
    bottom: "6.81%",
    width: "4.93%",
    height: "18.19%",
    position: "absolute",
  },
  header: {
    height: 75,
    top: 0,
    left: 0,
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
  },
  comprarButtomIcon: {
    right: "31.92%",
    left: "63.35%",
  },
  alertasButtomIcon: {
    height: "18.22%",
    width: "4.29%",
    right: "62.81%",
    bottom: "41.41%",
    left: "32.9%",
  },
  homeButtomIcon: {
    height: "18.28%",
    width: "4.91%",
    right: "80.07%",
    bottom: "41.35%",
    left: "15.02%",
  },
  maisButtom: {
    left: "44.4%",
    right: "44.18%",
    bottom: "57.38%",
    width: "11.43%",
    height: "42.62%",
  },
  menu: {
    marginLeft: -227.5,
    height: 122,
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
