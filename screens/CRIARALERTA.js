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
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CRIARALERTA = () => {
  const [switchOffValue, setSwitchOffValue] = useState(true);
  const [switchOnValue, setSwitchOnValue] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.criarAlerta}>
      <Pressable
        style={[styles.salvarButton, styles.cardPosition]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.salvarLabel}>Salvar</Text>
      </Pressable>
      <View style={[styles.card, styles.cardPosition]}>
        <RNPSwitch
          style={[styles.switchOff, styles.switchPosition]}
          value={switchOffValue}
          onValueChange={setSwitchOffValue}
          color="#a7aebf"
        />
        <Text style={[styles.menorLabel, styles.labelTypo4]}>
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
        <Text style={[styles.maiorLabel, styles.labelTypo4]}>
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
        autoCapitalize="none"
      />
      <View style={styles.moedas}>
        <Text style={[styles.brlLabel, styles.labelTypo3]}>BRL</Text>
        <Text style={[styles.realLabel, styles.labelTypo]}>Real</Text>
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
        <Text style={[styles.usdLabel, styles.labelTypo3]}>USD</Text>
        <Text style={[styles.dolarLabel, styles.labelTypo]}>Dólar</Text>
        <Image
          style={[styles.dolarIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/realicon.png")}
        />
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={[styles.adicionaralertaTitle, styles.labelTypo]}>
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
  cardPosition: {
    width: 316,
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
  labelTypo4: {
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
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  labelTypo3: {
    textAlign: "center",
    color: Color.secundary,
    top: "84.73%",
    lineHeight: 20,
    fontSize: FontSize.label1_size,
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    position: "absolute",
  },
  labelTypo: {
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
    marginLeft: -29,
    top: "25%",
    color: Color.neutral1,
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.title3SemiBold_size,
    left: "50%",
    position: "absolute",
  },
  salvarButton: {
    height: "5.91%",
    marginLeft: -157.5,
    top: "65.39%",
    bottom: "28.69%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.primary,
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
    marginLeft: -156.5,
    top: "48.28%",
    bottom: "37.93%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.neutral,
    overflow: "hidden",
  },
  dolarInput: {
    height: "8.13%",
    marginLeft: -113.5,
    top: "36.58%",
  },
  brlLabel: {
    left: "80.91%",
  },
  realLabel: {
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
    marginLeft: -3.63,
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
    width: "58.67%",
    top: "17%",
    right: "20.53%",
    bottom: "66.87%",
    left: "20.8%",
    position: "absolute",
  },
  adicionaralertaTitle: {
    marginLeft: -74.5,
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
    height: "9.24%",
    bottom: "90.76%",
    top: "0%",
    width: 375,
    marginLeft: -187.5,
  },
  criarAlerta: {
    backgroundColor: Color.neutral1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CRIARALERTA;
