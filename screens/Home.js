import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Servicio from "../componentes/Servicio";
import serviciosMock from "../componentes/serviciosMock";

const Home = () => {
  const totalGanado = serviciosMock.reduce((sum, servicio) => sum + servicio.costoServicio, 0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Encargado</Text>
      <Text style={styles.total}>Total ganado: ${totalGanado}</Text>
      <Servicio />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 100,
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
