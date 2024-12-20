import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

const ButtonRoles = [
    { id: 1, imageDefault: require("../assets/iconRoles/Encargado.png"), imageSelected: require("../assets/iconRoles/EncargadoSelected.png"), label: 'Encargado' },
    { id: 2, imageDefault: require("../assets/iconRoles/empleado.png"), imageSelected: require("../assets/iconRoles/empleadoSelected.png"), label: 'Empleado' },
];

const EditUser = () => {
    const [text, setText] = React.useState("");
    const [text2, setText2] = React.useState("");
    const [text3, setText3] = React.useState("");

    const [selectedButtonId, setSelectedButtonId] = useState(null); 

    const navigation = useNavigation();

    const handlePress = (id) => {
        setSelectedButtonId(id); 
    };



    return (
        <View style={styles.container}>
            <Text style={styles.txtSelectRol}>Selecciona el Rol</Text>
            <View style={styles.containRol}>
                {ButtonRoles.map((button) => (
                    <TouchableOpacity
                        key={button.id}
                        style={[
                            styles.btnRol,
                            { backgroundColor: selectedButtonId === button.id ? '#1A69DC' : '#E9E9E9' },
                        ]}
                        onPress={() => handlePress(button.id)}
                    >
                        <Image
                            source={selectedButtonId === button.id ? button.imageSelected : button.imageDefault}
                            style={styles.image}
                        />
                        <Text
                            style={[
                                {
                                    fontSize: 16,
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    color: selectedButtonId === button.id ? '#FFFFFF' : '#000000', 
                                },
                            ]}
                        >
                            {button.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TextInput
                style={styles.inputs}
                label="Nombre"
                placeholder="Ej. Juan" 
                value={text} 
                onChangeText={(text) => setText(text)} 
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
            />
            <TextInput
                style={styles.inputs}
                label="Email"
                placeholder="Ej. juanito123@gmail.com" 
                value={text2}
                onChangeText={(text2) => setText2(text2)}
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
            />
            <TextInput
                style={styles.inputs}
                label="Contraseña"
                placeholder="Ej. @AcS4.Zy"
                value={text3}
                onChangeText={(text3) => setText3(text3)}
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
            />
            <TouchableOpacity style={styles.btnAddUser} onPress={() =>
                Alert.alert(
                    "Usuario actualizado con éxito",
                    "Se actualizaron los datos del usuario.",
                    [
                        {
                            text: "OK",
                            onPress: () => navigation.goBack(),
                        },
                    ],
                    { cancelable: false }
                )
            }>
                <Text
                    style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}

                >
                    Actualizar Usuario</Text>
            </TouchableOpacity>

        </View >
    )
}

export default EditUser

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs: {
        width: '93%',
        fontSize: 16,
        marginBottom: 15,
    },
    txtSelectRol: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 15,
        alignSelf: 'flex-start'
    },
    containRol: {
        display: 'flex',
        width: '100%',
        height: 125,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
        gap: 20,
    },
    btnRol: {
        width: 150,
        height: 115,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
    },
    btnAddUser: {
        width: '93%',
        height: 50,
        marginHorizontal: 15,
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: '#1A69DC',
        alignItems: "center",
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
    },

})