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
    <View style={styles.editarAlerta}>
      <Pressable
        style={[styles.salvarButton, styles.buttonLayout]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.salvarLabel, styles.labelTypo1]}>Salvar</Text>
      </Pressable>
      <Pressable
        style={[styles.excluirButton, styles.buttonLayout]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.excluirLabel, styles.labelTypo1]}>Excluir</Text>
      </Pressable>
      <View style={[styles.card, styles.iconPosition]}>
        <RNPSwitch
          style={[styles.switchOff, styles.switchPosition]}
          value={switchOffValue}
          onValueChange={setSwitchOffValue}
          color="#a7aebf"
        />
        <Text style={[styles.menorLabel, styles.labelTypo]}>
          Menor do que R$5,19
        </Text>
        <Image
          style={[styles.upDownIcon, styles.iconLayout1]}
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
        <Text style={[styles.maiorLabel, styles.labelTypo]}>
          Maior do que R$5,19
        </Text>
        <Image
          style={[styles.upIcon, styles.iconLayout1]}
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
          style={[styles.realIcon, styles.iconLayout]}
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
          style={[styles.dolarIcon, styles.iconLayout]}
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
            style={[styles.icon, styles.iconLayout1]}
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
  labelTypo1: {
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
  labelTypo: {
    color: Color.neutral5,
    lineHeight: 20,
    fontSize: FontSize.label1_size,
    left: "17.41%",
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  brlTextTypo: {
    textAlign: "center",
    color: Color.secundary,
    top: "84.73%",
    lineHeight: 20,
    fontSize: FontSize.label1_size,
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
  iconLayout: {
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
    backgroundColor: Color.neutral,
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
    height: "100%",
    maxHeight: "100%",
    width: "100%",
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
    marginLeft: -187.5,
  },
  editarAlerta: {
    backgroundColor: Color.neutral1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default EDITARALERTA;
