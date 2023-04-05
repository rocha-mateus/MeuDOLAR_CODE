import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
  View,
} from "react-native";
import MenuContainer from "../components/MenuContainer";
import GRAFICO from "../components/GRAFICO";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const HOME = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <MenuContainer />
      <GRAFICO />
      <Text style={[styles.dolarPrice, styles.dolarFlexBox]}>$5,29</Text>
      <Text style={[styles.dolarLabel, styles.dolarFlexBox]}>DÓLAR AGORA!</Text>
      <Image
        style={[styles.dolarIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/dolaricon.png")}
      />
      <Pressable
        style={styles.userButton}
        onPress={() => navigation.navigate("Conta")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/userbuttom.png")}
        />
      </Pressable>
      <Text style={[styles.nomeLabel, styles.labelTypo]}>Maria!</Text>
      <Text style={[styles.boasvindasLabel, styles.labelTypo]}>Bem-vinda,</Text>
      <StatusBar
        barStyle="default"
        translucent={true}
        backgroundColor="#16171d"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dolarFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  labelTypo: {
    lineHeight: 37,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.neutral5,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  dolarPrice: {
    height: "5.42%",
    width: "40%",
    top: "37.68%",
    fontSize: 50,
    color: Color.neutral5,
    fontFamily: FontFamily.title3SemiBold,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 20,
    left: "7.73%",
  },
  dolarLabel: {
    height: "2.34%",
    width: "28%",
    top: "32.27%",
    left: "17.6%",
    fontSize: FontSize.body2Regular_size,
    fontWeight: "500",
    fontFamily: FontFamily.label1,
    color: Color.neutral2,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 20,
  },
  dolarIcon: {
    height: "2.96%",
    width: "6.4%",
    top: "32.02%",
    right: "85.87%",
    bottom: "65.02%",
    left: "7.73%",
    maxWidth: "100%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  userButton: {
    left: "81.33%",
    top: "16.13%",
    right: "8%",
    bottom: "78.94%",
    width: "10.67%",
    height: "4.93%",
    position: "absolute",
  },
  nomeLabel: {
    top: "19.58%",
    left: "8.8%",
  },
  boasvindasLabel: {
    top: "15.02%",
    left: "8.27%",
  },
  home: {
    backgroundColor: Color.neutral1,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default HOME;
