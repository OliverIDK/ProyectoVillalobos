import React from "react";
import { StyleSheet, Alert, Image, View } from "react-native";
import { Card, Avatar, IconButton, Divider,Text } from "react-native-paper";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { AntDesign } from "@expo/vector-icons";

const Usuario = ({ id, name, rol, email, onEdit, onDelete }) => {
  const ImageRol = (rol) => {
    return rol === "Encargado"
      ? require("../src/Assets/encargado.png")
      : require("../src/Assets/empleado.png");
  };

  const imagenUsuario = ImageRol(rol);

  return (
    <View>
      <Card style={styles.card}>
        <Card.Title
          title={name}
          subtitle={rol}
          left={(props) => (
            <Avatar.Image {...props} size={40} source={imagenUsuario} />
          )}
          right={(props) => (
            <Menu>
              <MenuTrigger>
                <IconButton {...props} icon="dots-vertical" />
              </MenuTrigger>
              <MenuOptions
                customStyles={{ optionsContainer: { borderRadius: 15 } }}
              >
                <MenuOption onSelect={onEdit}>
                  <View style={styles.menuOptionContainer}>
                    <AntDesign name="edit" size={20} color="#144E78" />
                    <Text style={styles.menuText}>Editar</Text>
                  </View>
                </MenuOption>
                <MenuOption
                  onSelect={() => {
                    Alert.alert(
                      "Confirmar eliminación",
                      `¿Deseas eliminar a ${name}?`,
                      [
                        { text: "Cancelar", style: "cancel" },
                        {
                          text: "Eliminar",
                          style: "destructive",
                          onPress: onDelete,
                        },
                      ]
                    );
                  }}
                >
                  <View style={styles.menuOptionContainer}>
                    <AntDesign name="delete" size={20} color="#d9534f" />
                    <Text style={styles.menuText}>Eliminar</Text>
                  </View>
                </MenuOption>
              </MenuOptions>
            </Menu>
          )}
        />
      </Card>
    </View>
  );
};

export default Usuario;

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 0, // Sin sombra en Android
    shadowColor: "transparent", // Sin sombra en iOS
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 8,
  },
  menuOptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  
});
