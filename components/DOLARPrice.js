import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DOLARPrice = () => {
  return <Text style={styles.dolarPrice}>$5,29</Text>;
};

const styles = StyleSheet.create({
  dolarPrice: {
    fontSize: FontSize.size_31xl,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.title3SemiBold,
    color: Color.neutral5,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 150,
    height: 44,
    marginTop: 13,
  },
});

export default DOLARPrice;
