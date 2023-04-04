import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily, Padding } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.logIn, styles.iconLayout]}>
      <View style={[styles.entrarButton, styles.emailInputFlexBox]}>
        <Text style={styles.entrarLabel}>Entrar</Text>
      </View>
      <View style={styles.novocriar}>
        <Text style={[styles.novoLabel, styles.novoLabelTypo]}>
          Novo no MeuDOLAR?
        </Text>
        <Text style={[styles.criarButton, styles.novoLabelTypo]}>
          Crie uma conta!
        </Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <TextInput
          style={[styles.senhaInput, styles.inputPosition]}
          placeholder="Esqueceu sua senha?"
          keyboardType="default"
          placeholderTextColor="#00ff5f"
        />
        <Text style={[styles.senhaLabel, styles.labelTypo]}>Senha</Text>
        <TextInput
          style={[styles.emailInput, styles.inputPosition]}
          placeholder="Insira sua conta de email"
          keyboardType="email-address"
          placeholderTextColor="#494d58"
        />
        <Text style={[styles.emailLabel, styles.labelTypo]}>{`Email `}</Text>
        <Text style={styles.loginTitle}>Login</Text>
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
  emailInputFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  novoLabelTypo: {
    lineHeight: 20,
    fontSize: FontSize.label1_size,
    top: "0%",
    textAlign: "left",
    position: "absolute",
  },
  headerPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  inputPosition: {
    backgroundColor: Color.neutral,
    left: "6.4%",
    right: "6.4%",
    width: "87.2%",
    height: "64%",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  labelTypo: {
    color: Color.neutral4,
    left: "6.4%",
    lineHeight: 20,
    fontSize: FontSize.label1_size,
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    position: "absolute",
  },
  entrarLabel: {
    color: Color.neutral1,
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.title3SemiBold_size,
  },
  entrarButton: {
    height: "5.91%",
    marginLeft: -163.5,
    top: "45.81%",
    bottom: "48.28%",
    backgroundColor: Color.primary,
    width: 327,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 12,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  novoLabel: {
    left: "0%",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.secundary,
  },
  criarButton: {
    left: "56.11%",
    color: Color.primary,
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.label1_size,
  },
  novocriar: {
    marginLeft: -131.5,
    bottom: 40,
    width: 262,
    height: 20,
    left: "50%",
    position: "absolute",
  },
  senhaInput: {
    top: "304%",
    bottom: "-268%",
  },
  senhaLabel: {
    top: "272%",
  },
  emailInput: {
    top: "176%",
    bottom: "-140%",
    paddingLeft: 16,
    paddingTop: Padding.p_smi,
    paddingRight: Padding.p_xl,
    paddingBottom: Padding.p_smi,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    color: Color.background2,
    lineHeight: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  emailLabel: {
    top: "144%",
  },
  loginTitle: {
    marginLeft: -24.5,
    top: "68%",
    fontWeight: "600",
    fontFamily: FontFamily.title3SemiBold,
    color: Color.neutral5,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.title3SemiBold_size,
    left: "50%",
    position: "absolute",
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
    width: 375,
    marginLeft: -187.5,
  },
  logIn: {
    backgroundColor: Color.neutral1,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default LogIn;
