import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  StatusBar,
} from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ALERTAS = () => {
  return (
    <View style={styles.alertas}>
      <View style={[styles.alertaDown, styles.alertaPosition]}>
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconarrow1.png")}
        />
        <Text style={[styles.label, styles.labelFlexBox]}>R$ 5,19</Text>
        <Image
          style={[styles.upButtonIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/userbuttom1.png")}
        />
      </View>
      <Pressable
        style={[styles.alertaUp, styles.alertaPosition]}
        onPress={() => {}}
      >
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconarrow.png")}
        />
        <Text style={[styles.label, styles.labelFlexBox]}>R$ 5,19</Text>
        <Image
          style={[styles.upButtonIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/userbuttom2.png")}
        />
      </Pressable>
      <Text style={[styles.alertasHeader, styles.labelFlexBox]}>Alertas</Text>
      <StatusBar
        barStyle="default"
        translucent={true}
        backgroundColor="#16171d"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  alertaPosition: {
    right: "7.73%",
    width: "84.27%",
    height: "6.71%",
    left: "8%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelFlexBox: {
    textAlign: "left",
    color: Color.neutral5,
    position: "absolute",
  },
  divider: {
    height: "1.83%",
    width: "84.49%",
    top: "99.08%",
    right: "-0.16%",
    bottom: "-0.92%",
    left: "15.66%",
    borderStyle: "solid",
    borderColor: "#21242d",
    borderTopWidth: 1,
    position: "absolute",
  },
  iconArrow: {
    height: "18.38%",
    width: "1.96%",
    top: "27.52%",
    right: "0.26%",
    bottom: "54.1%",
    left: "97.78%",
  },
  label: {
    top: "18.35%",
    left: "18.67%",
    fontSize: FontSize.label1_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.label1,
  },
  upButtonIcon: {
    height: "73.39%",
    width: "12.66%",
    top: "0%",
    right: "87.34%",
    bottom: "26.61%",
    left: "0%",
  },
  alertaDown: {
    top: "20.44%",
    bottom: "72.84%",
    left: "8%",
  },
  alertaUp: {
    top: "29.13%",
    bottom: "64.16%",
    left: "8%",
  },
  alertasHeader: {
    top: "8.99%",
    fontSize: FontSize.size_13xl,
    lineHeight: 37,
    fontWeight: "600",
    fontFamily: FontFamily.title3SemiBold,
    left: "8%",
  },
  alertas: {
    backgroundColor: Color.neutral1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ALERTAS;
