import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const Grafica = ({
  lunes,
  martes,
  miercoles,
  jueves,
  viernes,
  sabado,
  domingo,
}) => {
  const data = {
    labels: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
    datasets: [
      {
        data: [lunes, martes, miercoles, jueves, viernes, sabado, domingo],
        color: () => "#144E78",
        strokeWidth: 2,
      },
    ],
    legend: ["Ganancias"],
  };

  const chartConfig = {
    backgroundGradientFrom: "#FFF",
    backgroundGradientFromOpacity: 0.8,
    backgroundGradientTo: "#1A69DC",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(20, 78, 120, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    labels: {
      fontColor: "#144E78",
    },
    propsForLabels: {
      fontSize: 12,
    },
  };

  return (
    <View style={styles.chartContainer}>
      <BarChart
        data={data}
        width={screenWidth *0.9}
        height={200}
        chartConfig={chartConfig}
        style={styles.chartStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    paddingHorizontal: 10,
  },
  chartStyle: {
    borderRadius: 16, 
    borderWidth: 1, 
    borderColor: "#144E78",
    overflow: "hidden",
    marginHorizontal: 5,
  },
});

export default Grafica;
