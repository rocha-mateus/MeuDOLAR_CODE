import React, { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import { Checkbox as RNPCheckbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Cadastrar = () => {
  const [checkchecked, setCheckchecked] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={[styles.cadastrar, styles.iconLayout]}>
      <View style={styles.jpossuientre}>
        <Pressable
          style={styles.entre}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.entre1, styles.criarTypo]}>Entre!</Text>
        </Pressable>
        <Text style={[styles.jPossuiLabel, styles.ajudaTextTypo]}>
          Já possui uma conta?
        </Text>
      </View>
      <View style={styles.input}>
        <View style={[styles.termosEPolitica, styles.ajudaTextPosition]}>
          <View style={styles.check}>
            <RNPCheckbox
              status={checkchecked ? "checked" : "unchecked"}
              onPress={() => setCheckchecked(!checkchecked)}
              color="#787a8d"
            />
          </View>
          <Text style={[styles.euAceitoTermosContainer, styles.ajudaTextTypo]}>
            <Text style={styles.euAceito}>{`Eu aceito `}</Text>
            <Text style={styles.termos}>{`Termos `}</Text>
            <Text style={styles.euAceito}>{`& `}</Text>
            <Text style={styles.termos}>Política de Privacidade</Text>
          </Text>
        </View>
        <Text style={[styles.ajudaText, styles.ajudaTextPosition]}>
          Pelo menos 8 caracteres com letras maiúsculas e números.
        </Text>
        <Pressable
          style={styles.entrarButton}
          onPress={() => navigation.toggleDrawer()}
        >
          <Text style={[styles.criar, styles.criarLayout]}>Criar</Text>
        </Pressable>
        <TextInput
          style={[styles.senhaInput, styles.inputLayout]}
          placeholder="Insira sua senha"
          keyboardType="default"
          secureTextEntry
          placeholderTextColor="#494d58"
        />
        <Text style={[styles.senhaLabel, styles.labelTypo]}>Senha</Text>
        <TextInput
          style={[styles.emailInput, styles.inputLayout]}
          placeholder="Insira sua conta de email"
          keyboardType="default"
          placeholderTextColor="#494d58"
        />
        <Text style={[styles.emailLabel, styles.labelTypo]}>{`Email `}</Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={[styles.cadastrarTitle, styles.criarLayout]}>
          Cadastrar
        </Text>
        <Pressable
          style={styles.voltarButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
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
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  criarTypo: {
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
  },
  ajudaTextTypo: {
    fontFamily: FontFamily.body2Regular,
    textAlign: "left",
  },
  ajudaTextPosition: {
    left: "0.61%",
    position: "absolute",
  },
  criarLayout: {
    lineHeight: 24,
    fontSize: FontSize.title3SemiBold_size,
    position: "absolute",
  },
  inputLayout: {
    backgroundColor: Color.background2,
    width: 327,
    borderRadius: Border.br_xs,
    marginLeft: -163.5,
    height: "15.38%",
    left: "50%",
    position: "absolute",
  },
  labelTypo: {
    left: "0%",
    color: Color.neutral4,
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
    position: "absolute",
  },
  headerPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  entre1: {
    marginLeft: 59,
    color: Color.primary,
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
  },
  entre: {
    top: "0%",
    left: "50%",
    position: "absolute",
  },
  jPossuiLabel: {
    marginLeft: -100,
    color: Color.neutral2,
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
    top: "0%",
    left: "50%",
    position: "absolute",
  },
  jpossuientre: {
    height: "2.46%",
    marginLeft: -99.5,
    top: "92.61%",
    bottom: "4.93%",
    width: 200,
    left: "50%",
    position: "absolute",
  },
  check: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  euAceito: {
    color: Color.neutral4,
  },
  termos: {
    color: Color.primary,
  },
  euAceitoTermosContainer: {
    left: 28,
    top: 0,
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
    position: "absolute",
  },
  termosEPolitica: {
    height: "6.41%",
    width: "99.39%",
    top: "69.87%",
    right: "0%",
    bottom: "23.72%",
  },
  ajudaText: {
    width: "97.55%",
    top: "56.09%",
    fontSize: 11,
    lineHeight: 16,
    color: Color.neutral3,
    fontFamily: FontFamily.body2Regular,
    textAlign: "left",
  },
  criar: {
    top: 12,
    left: 141,
    color: Color.neutral1,
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
  },
  entrarButton: {
    top: "84.62%",
    bottom: "0%",
    backgroundColor: Color.primary,
    width: 327,
    borderRadius: Border.br_xs,
    marginLeft: -163.5,
    height: "15.38%",
    left: "50%",
    position: "absolute",
  },
  senhaInput: {
    top: "38.46%",
    bottom: "46.15%",
  },
  senhaLabel: {
    top: "30.77%",
  },
  emailInput: {
    top: "7.69%",
    bottom: "76.92%",
  },
  emailLabel: {
    top: "0%",
  },
  input: {
    height: "38.42%",
    width: "87.2%",
    top: "13.3%",
    right: "6.4%",
    bottom: "48.28%",
    left: "6.4%",
    position: "absolute",
  },
  cadastrarTitle: {
    marginLeft: -47.5,
    top: "68%",
    fontWeight: "600",
    fontFamily: FontFamily.title3SemiBold,
    color: Color.neutral5,
    textAlign: "center",
    left: "50%",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
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
  },
  cadastrar: {
    backgroundColor: Color.neutral1,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Cadastrar;
