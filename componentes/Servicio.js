import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Card, Divider } from "react-native-paper";
import serviciosMock from "../componentes/serviciosMock";

const Servicio = () => {
  const renderServicio = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.tipoServicio}
        subtitle={`Costo: $${item.costoServicio}`}
      />
      <Divider/>
      <Card.Content>
        <Text style={styles.text}>Fecha: {item.fecha}</Text>
        <Text style={styles.text}>Tipo de auto: {item.tipoAuto}</Text>
        <Text style={styles.text}>Color: {item.colorAuto}</Text>
        <Text style={styles.text}>Marca: {item.marca}</Text>
        <Text style={styles.text}>Placas: {item.placas}</Text>
      </Card.Content>
      
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={serviciosMock}
        keyExtractor={(item) => item.id}
        renderItem={renderServicio}
      />
    </View>
  );
};

export default Servicio;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  text: {
    fontSize: 14,
    marginVertical: 2,
  },
});
