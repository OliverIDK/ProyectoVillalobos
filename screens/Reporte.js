import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { LineChart } from "react-native-chart-kit";
const data = {
  labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab","Dom"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 34],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Ganancias"], // optional
};
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, 
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const Reporte = () => {
  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default Reporte;

const styles = StyleSheet.create({});
