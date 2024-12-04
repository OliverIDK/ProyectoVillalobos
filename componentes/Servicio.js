import { StyleSheet, Text, View, FlatList, Image, Alert } from "react-native";
import React from "react";
import { Card, Divider, IconButton } from "react-native-paper";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import { AntDesign } from "@expo/vector-icons";
import serviciosMock from "../componentes/serviciosMock";
import { useNavigation } from "@react-navigation/native";
const imagenes = {
  carroMediano: require("../assets/iconosVehiculos/carroMediano.png"),
  carroGrande: require("../assets/iconosVehiculos/carroGrande.png"),
  carroChico: require("../assets/iconosVehiculos/carroChico.png"),
};

const Servicio = () => {
  const navigation = useNavigation();
  const handleDelete = (nombreServicio) => {
    Alert.alert("Confirmar eliminación", `¿Deseas eliminar el servicio: ${nombreServicio}?`, [
      { text: "Cancelar", style: "cancel" },
      { text: "Eliminar", style: "destructive", onPress: () => console.log(`Eliminando servicio: ${nombreServicio}`) },
    ]);
  };

  const renderServicio = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.tipoServicio}
        subtitle={
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>${item.costoServicio}</Text>
            <Text style={styles.subtitleText}>{item.placas}</Text>
            <View style={[styles.colorCircle, { backgroundColor: item.colorAuto.toLowerCase() }]} />
          </View>
        }
        left={() => (
          <Image
            source={imagenes[item.imagen]}
            style={styles.avatar}
            resizeMode="contain"
          />
        )}
        right={() => (
          <Menu>
            <MenuTrigger>
              <IconButton icon="dots-vertical" size={24} />
            </MenuTrigger>
            <MenuOptions customStyles={{ optionsContainer: { borderRadius: 15 } }}>
              <MenuOption onSelect={() => navigation.navigate('EditServicio')}>
                <View style={styles.menuOptionContainer}>
                  <AntDesign name="edit" size={20} color="#144E78" />
                  <Text style={styles.menuText}>Editar</Text>
                </View>
              </MenuOption>
              <MenuOption onSelect={() => handleDelete(item.tipoServicio)}>
                <View style={styles.menuOptionContainer}>
                  <AntDesign name="delete" size={20} color="#d9534f" />
                  <Text style={styles.menuText}>Eliminar</Text>
                </View>
              </MenuOption>
            </MenuOptions>
          </Menu>
        )}
      />
      <Card.Content>
        <Text style={styles.text}>{item.fecha}</Text>
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
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  subtitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitleText: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 14,
    marginVertical: 2,
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  menuOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 8,
  },
});
