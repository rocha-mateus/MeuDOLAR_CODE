import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const GRAFICO = () => {
  return (
    <View style={[styles.grafico, styles.graficoPosition]}>
      <View style={[styles.cardVector, styles.graficoPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  graficoPosition: {
    width: 316,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  cardVector: {
    marginTop: -97.5,
    marginLeft: -158,
    borderRadius: Border.br_xl,
    backgroundColor: Color.background2,
    height: 195,
  },
  grafico: {
    marginTop: 44,
    marginLeft: -158.5,
    height: 209,
  },
});

export default GRAFICO;
