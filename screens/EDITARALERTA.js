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
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const EDITARALERTA = () => {
  const [switchOffValue, setSwitchOffValue] = useState(true);
  const [switchOnValue, setSwitchOnValue] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.editaralerta}>
      <Pressable
        style={[styles.salvarButton, styles.buttonLayout]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.salvarLabel, styles.labelTypo2]}>Salvar</Text>
      </Pressable>
      <Pressable
        style={[styles.excluirButton, styles.buttonLayout]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.excluirLabel, styles.labelTypo2]}>Excluir</Text>
      </Pressable>
      <View style={[styles.card, styles.iconPosition]}>
        <RNPSwitch
          style={[styles.switchOff, styles.switchPosition]}
          value={switchOffValue}
          onValueChange={setSwitchOffValue}
          color="#a7aebf"
        />
        <Text style={[styles.menorLabel, styles.labelTypo1]}>
          Menor do que R$5,19
        </Text>
        <Image
          style={[styles.upDownIcon, styles.iconLayout4]}
          resizeMode="cover"
          source={require("../assets/updown.png")}
        />
        <Image
          style={[styles.divisorIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/divisor.png")}
        />
        <RNPSwitch
          style={[styles.switchOn, styles.switchPosition]}
          value={switchOnValue}
          onValueChange={setSwitchOnValue}
          color="#00ff5f"
        />
        <Text style={[styles.maiorLabel, styles.labelTypo1]}>
          Maior do que R$5,19
        </Text>
        <Image
          style={[styles.upIcon, styles.iconLayout4]}
          resizeMode="cover"
          source={require("../assets/upicon.png")}
        />
      </View>
      <TextInput
        style={[styles.dolarInput, styles.iconPosition]}
        placeholder="$0,00"
        keyboardType="number-pad"
      />
      <View style={[styles.moedas, styles.iconPosition]}>
        <Text style={[styles.brlText, styles.brlTextTypo]}>BRL</Text>
        <Text style={[styles.realText, styles.realTextTypo]}>Real</Text>
        <Image
          style={[styles.realIcon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/realicon.png")}
        />
        <Image
          style={[styles.retornoVectorIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/retornovector.png")}
        />
        <Text style={[styles.usdLabel, styles.brlTextTypo]}>USD</Text>
        <Text style={[styles.dolarLabel, styles.realTextTypo]}>Dólar</Text>
        <Image
          style={[styles.dolarIcon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/realicon.png")}
        />
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={[styles.adicionaralertaTitle, styles.realTextTypo]}>
          Editar Alerta
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
            source={require("../assets/comprarvector03@3x1.png")}
          />
          <Image
            style={[styles.comprarVector02Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/comprarvector02.png")}
          />
          <Image
            style={[styles.comprarVector01Icon, styles.iconLayout4]}
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
          style={[styles.maisButton, styles.iconPosition]}
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
  buttonLayout: {
    borderRadius: Border.br_xs,
    bottom: "28.69%",
    top: "65.39%",
    width: "38.67%",
    height: "5.91%",
    position: "absolute",
  },
  labelTypo2: {
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    lineHeight: 24,
    top: "25%",
    marginLeft: -29,
    fontSize: FontSize.title3SemiBold_size,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  switchPosition: {
    left: "80.7%",
    right: "6.65%",
    width: "12.66%",
    height: "19.64%",
    position: "absolute",
  },
  labelTypo1: {
    color: Color.neutral5,
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
    left: "17.41%",
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout4: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  brlTextTypo: {
    textAlign: "center",
    color: Color.neutral2,
    top: "84.73%",
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    position: "absolute",
  },
  realTextTypo: {
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.neutral5,
    lineHeight: 24,
    position: "absolute",
  },
  iconLayout3: {
    bottom: "54.2%",
    width: "27.27%",
    height: "45.8%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  headerPosition: {
    width: 375,
    marginLeft: -187.5,
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
    color: Color.neutral3,
    lineHeight: 16,
    fontSize: FontSize.caption1Medium_size,
    bottom: 0,
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    left: "50%",
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
  salvarLabel: {
    color: Color.neutral1,
  },
  salvarButton: {
    right: "8%",
    left: "53.33%",
    backgroundColor: Color.primary,
  },
  excluirLabel: {
    color: Color.primary,
  },
  excluirButton: {
    right: "53.33%",
    left: "8%",
    borderStyle: "solid",
    borderColor: "#00ff5f",
    borderWidth: 2,
  },
  switchOff: {
    top: "64.29%",
    bottom: "16.07%",
  },
  menorLabel: {
    top: "66.07%",
  },
  upDownIcon: {
    height: "18.3%",
    width: "9.27%",
    top: "69.87%",
    right: "84.95%",
    bottom: "11.83%",
    left: "5.78%",
    maxHeight: "100%",
    position: "absolute",
  },
  divisorIcon: {
    height: "1.32%",
    marginLeft: -137,
    top: "49.55%",
    bottom: "49.13%",
    width: 274,
    maxHeight: "100%",
  },
  switchOn: {
    top: "21.43%",
    bottom: "58.93%",
  },
  maiorLabel: {
    top: "16.07%",
  },
  upIcon: {
    height: "11.16%",
    width: "6.74%",
    top: "19.87%",
    right: "86.22%",
    bottom: "68.97%",
    left: "7.04%",
    maxHeight: "100%",
    position: "absolute",
  },
  card: {
    height: "13.79%",
    marginLeft: -160.5,
    top: "48.28%",
    bottom: "37.93%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.background2,
    width: 316,
    overflow: "hidden",
  },
  dolarInput: {
    height: "8.13%",
    marginLeft: -113.5,
    top: "36.58%",
  },
  brlText: {
    left: "80.91%",
  },
  realText: {
    left: "74.09%",
    fontSize: FontSize.size_5xl,
    top: "61.07%",
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
  },
  realIcon: {
    right: "0%",
    left: "72.73%",
  },
  retornoVectorIcon: {
    height: "16.81%",
    marginLeft: -3.62,
    top: "37.4%",
    bottom: "45.79%",
    width: 23,
    maxHeight: "100%",
  },
  usdLabel: {
    left: "8.64%",
  },
  dolarLabel: {
    left: "0%",
    fontSize: FontSize.size_5xl,
    top: "61.07%",
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
  },
  dolarIcon: {
    right: "71.36%",
    left: "1.36%",
  },
  moedas: {
    height: "16.13%",
    marginLeft: -109.5,
    top: "17%",
    bottom: "66.87%",
    width: 220,
  },
  adicionaralertaTitle: {
    marginLeft: -56.5,
    top: "68%",
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    fontSize: FontSize.title3SemiBold_size,
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
    position: "absolute",
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
  editaralerta: {
    backgroundColor: Color.neutral1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default EDITARALERTA;
