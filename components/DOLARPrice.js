import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DOLARPrice = () => {
  return <Text style={styles.dolarPrice}>$5,29</Text>;
};

const styles = StyleSheet.create({
  dolarPrice: {
    position: "absolute",
    height: "5.42%",
    width: "40%",
    top: "37.68%",
    left: "7.73%",
    fontSize: FontSize.size_31xl,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.title3SemiBold,
    color: Color.neutral5,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
});

export default DOLARPrice;
