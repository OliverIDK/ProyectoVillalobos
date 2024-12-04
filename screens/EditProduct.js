import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'L', value: '1' },
    { label: 'Dl', value: '2' },
    { label: 'Mg', value: '3' },
    { label: 'Ml', value: '4' },
];

const EditProduct = () => {
    const [text, setText] = React.useState("");

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    const navigation = useNavigation();

    const handlePress = (id) => {
        setSelectedButtonId(id);
    };



    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/iconInventario.png')}
                style={{ width: 100, height: 100, marginBottom: 20 }}
            />
            <TextInput
                style={styles.inputs}
                label="Nombre del Producto"
                placeholder="Ej. Shampoo para carro" // Texto inicial
                value={text} // Valor del TextInput
                onChangeText={(text) => setText(text)} // Manejador para cambios de texto
                mode="outlined" // Borde del estilo outlined
                activeOutlineColor="#1A69DC" // Color del borde cuando está enfocado
                outlineColor="#ccc"
                outlineStyle={{
                    borderRadius: 12, // Esquinas redondeadas del borde
                    borderWidth: 1.5, // Grosor del borde cuando no está enfocado
                }}
                theme={{
                    colors: {
                        background: "#fff", // Fondo del campo de texto
                        placeholder: "#555", // Color del texto del placeholder
                        text: "#555", // Color del texto ingresado
                    },
                }}
            />
            <View style={{ width: '93%', height: 80, backgroundColor: 'white',flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text
                    style={{ fontSize: 18, color: 'black', fontWeight: 'bold', textAlign: 'center', alignContent: 'center' }}>
                    Medida:
                </Text>
                <Dropdown
                    style={[
                        styles.dropdown,
                        isFocus && { borderColor: '#1A69DC', borderWidth: 2 },
                    ]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={[
                        styles.iconStyle,
                        isFocus && { tintColor: '#1A69DC' },
                    ]}
                    data={data}
                    search
                    maxHeight={400}
                    labelField="label"
                    valueField="value"
                    placeholder='Selecciona el modelo'
                    searchPlaceholder="Buscar..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />

            </View>
            <TouchableOpacity style={styles.btnAddUser} onPress={() =>
                 Alert.alert(
                    "Producto actualizado con éxito",
                    "Se actualizaron los datos del producto.",
                    [
                        {
                            text: "OK",
                            onPress: () => navigation.goBack(), // Regresa uno hacia atrás al presionar OK
                        },
                    ],
                    { cancelable: false } // Evita cerrar el alert tocando fuera
                )
            }>
                <Text
                    style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}

                >
                    Actualizar Producto</Text>
            </TouchableOpacity>

        </View >
    )
}

export default EditProduct

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        paddingTop: '140',
        alignItems: 'center',
        
    },
    inputs: {
        width: '93%',
        fontSize: 16,
        marginBottom: 5,
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
    dropdown: {
        margin: 10,
        width: '80%',
        height: 50,
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1.5,
        borderColor: '#ccc',
        gap: 5,
    },
    btnAddUser: {
        width: '93%',
        height: 50,
        marginHorizontal: 15,
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: '#1A69DC',
        alignItems: "center",
        elevation: 5, // Elevación para Android
        shadowColor: '#000', // Color de sombra (iOS)
        shadowOpacity: 0.3, // Opacidad de sombra (iOS)
        shadowOffset: { width: 0, height: 3 }, // Desplazamiento de la sombra (iOS)
        shadowRadius: 5, // Difuminado de la sombra (iOS)
    },

})