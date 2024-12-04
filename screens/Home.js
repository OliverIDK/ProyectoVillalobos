import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Servicio from "../componentes/Servicio";
import serviciosMock from "../componentes/serviciosMock";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const totalGanado = serviciosMock.reduce((sum, servicio) => sum + servicio.costoServicio, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encargado</Text>
      <TouchableOpacity style={styles.Titulos}><Entypo name="log-out"
          size={30}
          color="#144E78"
          onPress={() => navigation.goBack()}></Entypo></TouchableOpacity>
      <Text style={styles.total}>Total ganado: ${totalGanado}</Text>
      <ScrollView><Servicio/></ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 100,
    width:"100%"
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
  Titulos:{
    position:"absolute",
    left:350,
    top:10,
  }
});
