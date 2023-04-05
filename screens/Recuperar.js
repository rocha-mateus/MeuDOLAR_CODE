import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  TextInput,
  View,
  Image,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Recuperar = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.recuperar, styles.iconLayout]}>
      <View style={styles.input}>
        <Pressable
          style={styles.entrarButton}
          onPress={() => navigation.toggleDrawer()}
        >
          <Text style={styles.recuperar1}>Recuperar</Text>
        </Pressable>
        <TextInput
          style={styles.emailInput}
          placeholder="Insira sua conta de email"
          keyboardType="default"
          placeholderTextColor="#494d58"
        />
        <Text
          style={[styles.emailLabel, styles.emailLabelTypo]}
        >{`Email `}</Text>
        <Text style={[styles.porFavorDigite, styles.emailLabelTypo]}>
          Por favor, digite seu e-mail que você usou para se inscrever no
          MeuDOLAR.
        </Text>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Text style={styles.recuperarTitle}>Recuperar Senha</Text>
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
  emailLabelTypo: {
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  headerPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  recuperar1: {
    top: 12,
    left: 116,
    color: Color.neutral1,
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.title3SemiBold_size,
    position: "absolute",
  },
  entrarButton: {
    top: "79.4%",
    bottom: "0%",
    backgroundColor: Color.primary,
    borderRadius: Border.br_xs,
    height: "20.6%",
    width: 327,
    left: "50%",
    marginLeft: -163.5,
    position: "absolute",
  },
  emailInput: {
    top: "41.2%",
    right: "0%",
    bottom: "38.2%",
    backgroundColor: Color.background2,
    left: "0%",
    borderRadius: Border.br_xs,
    height: "20.6%",
    position: "absolute",
    width: "100%",
  },
  emailLabel: {
    top: "28.76%",
    color: Color.neutral4,
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.body2Regular_size,
  },
  porFavorDigite: {
    width: "83.18%",
    fontFamily: FontFamily.body2Regular,
    color: Color.neutral3,
    top: "0%",
  },
  input: {
    height: "28.69%",
    top: "16.01%",
    bottom: "55.3%",
    width: 327,
    left: "50%",
    marginLeft: -163.5,
    position: "absolute",
  },
  recuperarTitle: {
    marginLeft: -79.5,
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
  },
  recuperar: {
    backgroundColor: Color.neutral1,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Recuperar;
