import * as React from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const COMPRAR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.comprar}>
      <Pressable
        style={[styles.wise, styles.wisePosition]}
        onPress={() => navigation.navigate("HOME")}
      >
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconarrow.png")}
        />
        <Text style={styles.priceLabel}>$ 1,00</Text>
        <Text style={[styles.wiseName, styles.wiseNameClr]}>WISE</Text>
        <Image
          style={[styles.wiseLogoIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/wiselogo.png")}
        />
      </Pressable>
      <View style={[styles.nubank, styles.wisePosition]}>
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconarrow1.png")}
        />
        <Text style={styles.priceLabel}>$ 1,00</Text>
        <Text style={[styles.wiseName, styles.wiseNameClr]}>NUBANK</Text>
        <Image
          style={[styles.wiseLogoIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/nubanklogo.png")}
        />
      </View>
      <View style={[styles.nomad, styles.wisePosition]}>
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconarrow.png")}
        />
        <Text style={styles.priceLabel}>$ 1,00</Text>
        <Text style={[styles.wiseName, styles.wiseNameClr]}>NOMAD</Text>
        <Image
          style={[styles.wiseLogoIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/nomadlogo.png")}
        />
      </View>
      <View style={[styles.inter, styles.wisePosition]}>
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconarrow1.png")}
        />
        <Text style={styles.priceLabel}>$ 1,00</Text>
        <Text style={[styles.wiseName, styles.wiseNameClr]}>INTER</Text>
        <Image
          style={[styles.wiseLogoIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/interlogo.png")}
        />
      </View>
      <View style={[styles.c6Bank, styles.wisePosition]}>
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconarrow1.png")}
        />
        <Text style={styles.priceLabel}>$ 1,00</Text>
        <Text style={[styles.wiseName, styles.wiseNameClr]}>C6 BANK</Text>
        <Image
          style={[styles.wiseLogoIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/c6logo.png")}
        />
      </View>
      <View style={[styles.bs2go, styles.wisePosition]}>
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconarrow.png")}
        />
        <Text style={styles.priceLabel}>$ 1,00</Text>
        <Text style={[styles.wiseName, styles.wiseNameClr]}>BS2 GO</Text>
        <Image
          style={[styles.wiseLogoIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/bs2gologo1.png")}
        />
      </View>
      <View style={[styles.avenue, styles.wisePosition]}>
        <View style={styles.divider} />
        <Image
          style={[styles.iconArrow, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconarrow1.png")}
        />
        <Text style={styles.priceLabel}>$ 1,00</Text>
        <Text style={[styles.wiseName, styles.wiseNameClr]}>AVENUE</Text>
        <Image
          style={[styles.wiseLogoIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/avenuelogo.png")}
        />
      </View>
      <TextInput
        style={[styles.realInput, styles.realInputPosition]}
        placeholder="$0,00"
        keyboardType="number-pad"
      />
      <Text style={[styles.comprarHeader, styles.wiseNameClr]}>Comprar</Text>
      <StatusBar
        style={styles.realInputPosition}
        barStyle="default"
        translucent={true}
        backgroundColor="#16171d"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wisePosition: {
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
  wiseNameClr: {
    color: Color.neutral5,
    textAlign: "left",
    position: "absolute",
  },
  realInputPosition: {
    left: "50%",
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
  priceLabel: {
    left: "71.2%",
    color: Color.primary,
    textAlign: "left",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.label1_size,
    top: "18.35%",
    position: "absolute",
  },
  wiseName: {
    left: "18.67%",
    fontFamily: FontFamily.label1,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.label1_size,
    top: "18.35%",
    color: Color.neutral5,
  },
  wiseLogoIcon: {
    height: "73.39%",
    width: "12.66%",
    top: "0%",
    right: "87.34%",
    bottom: "26.61%",
    left: "0%",
  },
  wise: {
    top: "86.39%",
    bottom: "6.9%",
    left: "8%",
  },
  nubank: {
    top: "77.71%",
    bottom: "15.58%",
    left: "8%",
  },
  nomad: {
    top: "69.03%",
    bottom: "24.26%",
    left: "8%",
  },
  inter: {
    top: "60.34%",
    bottom: "32.94%",
    left: "8%",
  },
  c6Bank: {
    top: "51.23%",
    bottom: "42.06%",
    left: "8%",
  },
  bs2go: {
    top: "42.55%",
    bottom: "50.74%",
    left: "8%",
  },
  avenue: {
    top: "33.87%",
    bottom: "59.42%",
    left: "8%",
  },
  realInput: {
    height: "8.13%",
    marginLeft: -113.5,
    top: "20.44%",
  },
  comprarHeader: {
    top: "8.99%",
    fontSize: FontSize.size_13xl,
    lineHeight: 37,
    fontWeight: "600",
    fontFamily: FontFamily.title3SemiBold,
    left: "8%",
  },
  comprar: {
    backgroundColor: Color.neutral1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default COMPRAR;
