import { StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/Entypo";
import Usuario from "../componentes/Usuario";
import { usuariosMock } from "../componentes/usuariosMock"; 
import { useNavigation } from "@react-navigation/native";
const Usuarios = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <Icon name="magnifying-glass" size={20} color="#888" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Buscar usuario" />
        </View>
      </View>
      <ScrollView style={styles.body}>
        {usuariosMock.map((usuario) => (
          <Usuario
            key={usuario.id}
            id={usuario.id}
            name={usuario.name}
            rol={usuario.rol}
            email={usuario.email}
          />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('AddUsuario')}>
        <Icon name="circle-with-plus" size={65} color="#144E78" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { height: 100, backgroundColor: "white", justifyContent: "center", alignItems: "center" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: "90%",
    height: 50,
    paddingLeft: 10,
  },
  body: { flex: 1, backgroundColor: "white" },
  btnAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Usuarios;
