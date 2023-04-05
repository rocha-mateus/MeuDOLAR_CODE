import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.login, styles.iconLayout]}>
      <View style={styles.novocriar}>
        <Text style={styles.novoLabel}>Novo no MeuDOLAR?</Text>
        <Pressable
          style={styles.criarButton}
          onPress={() => navigation.navigate("Cadastrar")}
        >
          <Text style={[styles.crieUmaConta, styles.entrarLabelTypo]}>
            Crie uma conta!
          </Text>
        </Pressable>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={styles.input}>
          <Pressable
            style={styles.entrarButton}
            onPress={() => navigation.toggleDrawer()}
          >
            <Text style={[styles.entrarLabel, styles.loginTitleLayout]}>
              Entrar
            </Text>
          </Pressable>
          <View style={[styles.senhaInput, styles.inputPosition]} />
          <Text style={[styles.senhaLabel, styles.labelTypo]}>Senha</Text>
          <TextInput
            style={[styles.emailInput, styles.inputPosition]}
            placeholder="Insira sua conta de email"
            keyboardType="default"
            placeholderTextColor="#494d58"
          />
          <Text style={[styles.emailLabel, styles.labelTypo]}>{`Email `}</Text>
        </View>
        <Text style={[styles.loginTitle, styles.loginTitleLayout]}>Login</Text>
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
  entrarLabelTypo: {
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    textAlign: "left",
  },
  headerPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  loginTitleLayout: {
    lineHeight: 24,
    fontSize: FontSize.title3SemiBold_size,
    position: "absolute",
  },
  inputPosition: {
    backgroundColor: Color.background2,
    right: "0%",
    borderRadius: Border.br_xs,
    height: "15.38%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  labelTypo: {
    color: Color.neutral4,
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
    left: "0%",
    position: "absolute",
  },
  novoLabel: {
    fontFamily: FontFamily.body2Regular,
    color: Color.neutral2,
    textAlign: "left",
    left: "0%",
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
    top: "0%",
    position: "absolute",
  },
  crieUmaConta: {
    color: Color.primary,
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
    fontWeight: "500",
  },
  criarButton: {
    left: "56.11%",
    top: "0%",
    position: "absolute",
  },
  novocriar: {
    marginLeft: -131.5,
    bottom: 40,
    width: 262,
    height: 20,
    left: "50%",
    position: "absolute",
  },
  entrarLabel: {
    top: 12,
    left: 137,
    color: Color.neutral1,
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    textAlign: "left",
  },
  entrarButton: {
    top: "84.62%",
    bottom: "0%",
    backgroundColor: Color.primary,
    borderRadius: Border.br_xs,
    height: "15.38%",
    width: 327,
    marginLeft: -163.5,
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
    height: "416%",
    top: "144%",
    bottom: "-460%",
    width: 327,
    marginLeft: -163.5,
    left: "50%",
    position: "absolute",
  },
  loginTitle: {
    marginLeft: -24.5,
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
  login: {
    backgroundColor: Color.neutral1,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default LogIn;
