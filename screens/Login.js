import { Alert, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState } from 'react';
import "react-native-gesture-handler";
import { TextInput } from 'react-native-paper';
import Icon from '@expo/vector-icons/Entypo';

const Login = (props) => {

  const [text2, setText2] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const [showPassword, setShowPassword] = useState(false);


  const logueo = async () => {
    props.navigation.navigate("TapGroup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <ImageBackground
          style={styles.logo}
          source={require("../src/Assets/caroficial.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.textInicio}>Bienvenido!</Text>
        <TextInput
          style={styles.inputs}
          label="Email"
          placeholder="Ej. juanito123@gmail.com"
          value={text2}
          onChangeText={(text2) => setText2(text2)}
          onFocus={() => setIsFocused(true)} // Cambia el estado a true cuando se enfoca
          onBlur={() => setIsFocused(false)} // Cambia el estado a false cuando pierde el enfoque
          mode="outlined"
          activeOutlineColor="#1A69DC"
          outlineColor="#ccc"
          outlineStyle={{
            borderRadius: 12,
            borderWidth: 1.5,
          }}
          theme={{
            colors: {
              background: "#fff",
              placeholder: "#555",
              text: "#555",
            },
          }}
          left={
            <TextInput.Icon
              icon={() => (
                <Icon
                  name="mail"
                  size={24}
                  color={isFocused ? "#1A69DC" : "#555"} // Cambia el color según el estado
                />
              )}
            />
          }
        />
        <TextInput
          style={styles.inputs}
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChangeText={(password) => setPassword(password)}
          onFocus={() => setIsFocusedPassword(true)} // Cambia el estado a true cuando se enfoca
          onBlur={() => setIsFocusedPassword(false)} // Cambia el estado a false cuando pierde el enfoque
          mode="outlined"
          secureTextEntry={!showPassword} // Oculta o muestra la contraseña
          activeOutlineColor="#1A69DC"
          outlineColor="#ccc"
          outlineStyle={{
            borderRadius: 12,
            borderWidth: 1.5,
          }}
          theme={{
            colors: {
              background: "#fff",
              placeholder: "#555",
              text: "#555",
            },
          }}
          left={
            <TextInput.Icon
              icon={() => (
                <Icon
                  name="lock"
                  size={24}
                  color={isFocusedPassword ? "#1A69DC" : "#555"} // Cambia el color según el estado

                />
              )}
            />
          }
          right={
            password.length > 0 && ( // Mostrar el ícono solo si hay texto en el campo
              <TextInput.Icon
                icon={() => (
                  <Icon
                    name={showPassword ? "eye-with-line" : "eye"} // Cambiar ícono de ojo según visibilidad
                    size={20}
                    color={isFocusedPassword ? "#1A69DC" : "#555"} // Cambio de color cuando está enfocado
                  />
                )}
                onPress={() => setShowPassword(!showPassword)} // Alternar visibilidad de la contraseña
              />
            )
          }
        />
        <TouchableOpacity style={styles.btnSignIn} onPress={logueo}>
          <Text style={styles.btnText}>INICIAR SESIóN</Text>
        </TouchableOpacity>
        <Text style={styles.txtIDKPassword}>
          ¿Has olvidado tu contraseña?
        </Text>
      </View>
    </View>


  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "800px",
    backgroundColor: "#D4E6F1",
  },
  encabezado: {
    width: "100%",
    height: 250,
    backgroundColor: "#D4E6F1",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 150,
    paddingLeft: 50,
  },
  body: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
  textInicio: {
    marginVertical: 35,
    fontSize: 35,
    fontWeight: "bold",
    color: "#064557",
  },
  inputs: {
    width: '85%',
    fontSize: 16,
    marginBottom: 20,
  },
  icon: {
    padding: 10,
  },
  placeholderStyle: {
    fontSize: 22,
    color: "#ccc",
    backgroundColor: "green",
  },
  btnSignIn: {
    marginVertical: 20,
    height: 50,
    width: 280,
    marginHorizontal: 10,
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "#144E78",
    alignItems: "center",
  },
  btnText: {
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  txtIDKPassword: {
    color: "#144E78",
    fontWeight: "bold",
    fontSize: 12,
  },
});
