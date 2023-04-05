import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Border, Color } from "../GlobalStyles";

const GRAFICO = () => {
  return <View style={styles.grafico} />;
};

const styles = StyleSheet.create({
  grafico: {
    position: "absolute",
    height: "25.74%",
    marginLeft: -157.5,
    top: "54.31%",
    bottom: "19.95%",
    left: "50%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.background2,
    width: 316,
  },
});

export default GRAFICO;
