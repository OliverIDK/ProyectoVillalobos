import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { ProgressChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const GraficaP = ({
  carroChico,
  carroMediano,
  carroGrande,
  taxiUber,
  moto,
  cuatrimoto,
  racer,
}) => {
  const data = {
    labels: [
      "C. ch",
      "C. med",
      "C. g",
      "Taxi/Uber",
      "Moto",
      "Cuatri",
      "Racer",
    ],
    data: [
      carroChico,
      carroMediano,
      carroGrande,
      taxiUber,
      moto,
      cuatrimoto,
      racer,
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#FFF",
    backgroundGradientTo: "#FFF",
    backgroundGradientFromOpacity: 0.8,
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(20, 78, 120, ${opacity})`,
    strokeWidth: 1,
    useShadowColorFromDataset: false,
    propsForLabels: {
      fontSize: 10,
      fontWeight: "bold",
      maxWidth: screenWidth * 0.4,
    },
  };

  return (
    <View style={styles.chartContainer}>
      <ProgressChart
        data={data}
        width={screenWidth * 0.9}
        height={220}
        radius={15}
        chartConfig={chartConfig}
        style={styles.chartStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  chartStyle: {
    borderRadius: 16, 
    borderWidth: 1,
    borderColor: "#144E78", 
    overflow: "hidden",
  },
});

export default GraficaP;
