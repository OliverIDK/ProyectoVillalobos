import { StyleSheet, Text, View, Alert,Image } from "react-native";
import React from "react";
import {Menu,MenuOptions,MenuOption,MenuTrigger} from "react-native-popup-menu";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Usuario = ({ id, name, rol, email, onEdit }) => {
  const navigation = useNavigation();
  const ImageRol = (rol) =>{
    let Imagen;
    if (rol === "Encargado"){
      Imagen = require("../assets/encargado.png");
    }else{
      Imagen = require("../assets/empleado.png");
    }
    return Imagen;
  };

const imagenUsuario = ImageRol(rol);
  return (
    <View style={styles.celdas}>
      <View style={styles.leftContainer}>
        <Image source={imagenUsuario} style={styles.iconUser}></Image>
        <View style={styles.textContain}>
          <Text style={styles.txtName}>{name}</Text>
          <Text style={styles.txtRol}>{rol}</Text>
        </View>
      </View>
      <Menu>
        <MenuTrigger>
          <Entypo
            name="dots-three-vertical"
            size={25}
            color="#888"
            style={styles.icon}
          />
        </MenuTrigger>
        <MenuOptions customStyles={{optionsContainer: { borderRadius: 15}}}>
          <MenuOption>
            <View style={styles.menuItem}>
              <AntDesign name="edit" size={20} color="#144E78" />
              <Text style={styles.menuText}>Editar</Text>
            </View>
          </MenuOption>
          <MenuOption>
            <View style={styles.menuItem}>
              <AntDesign name="delete" size={20} color="#d9534f" />
              <Text style={styles.menuText}>Eliminar</Text>
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default Usuario;

const styles = StyleSheet.create({
  celdas: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContain: {
    flexDirection: "column",
  },
  icon: {
    padding: 10,
  },
  iconUser: {
    width:35,
    height:35,
    margin:10,
  },
  

  txtName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  txtRol: {
    fontSize: 12,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 9,
    paddingHorizontal: 10
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '400'
  },
});
