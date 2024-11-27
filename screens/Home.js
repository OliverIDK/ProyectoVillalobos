import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Servicio from "../componentes/Servicio";
import serviciosMock from "../componentes/serviciosMock";

const Home = () => {
  // Calcular la suma total del costo de los servicios
  const totalGanado = serviciosMock.reduce((sum, servicio) => sum + servicio.costoServicio, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encargado</Text>
      <Text style={styles.total}>Total ganado: ${totalGanado}</Text>
      {/* Eliminar el ScrollView */}
      <Servicio />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 20,
  },
});
