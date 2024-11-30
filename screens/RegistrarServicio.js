import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
    { label: 'Nissan', value: '1' },
    { label: 'Honda', value: '2' },
    { label: 'Chevrolet', value: '3' },
    { label: 'Ford', value: '4' },
    { label: 'Audi', value: '5' },
    { label: 'KIA', value: '6' },

];

const ButtonVehiculos = [
    { id: 1, image: require("../assets/iconosVehiculo/motoGray.png"), label: 'Moto' },
    { id: 2, image: require("../assets/iconosVehiculo/motoGray.png"), label: 'Sedan' },
    { id: 3, image: require("../assets/iconosVehiculo/motoGray.png"), label: 'Van' },
    { id: 4, image: require("../assets/iconosVehiculo/motoGray.png"), label: 'Camión' },
    { id: 5, image: require("../assets/iconosVehiculo/motoGray.png"), label: 'Camión' },
]

const ButtonColors = [
    { id: 1, color: 'white' },
    { id: 2, color: 'lightgray' },
    { id: 3, color: 'gray' },
    { id: 4, color: 'black' },
    { id: 5, color: 'red' },
    { id: 6, color: 'blue' },
    { id: 7, color: 'yellow' },
    { id: 8, color: 'orange' },
    { id: 9, color: 'pink' },
];



const RegistrarServicio = () => {
  
    const [matricula, setMatricula] = useState('');

    const handleInputChange = (text) => {
        // Expresión regular para formato: 3 letras y 4 números
        const regex = /^[A-Za-z]{0,3}[0-9]{0,4}$/;

        // Permitir solo 7 caracteres con el formato correcto
        if (text.length <= 7 && regex.test(text)) {
            setMatricula(text);
        }
    };

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };



    return (
        <View style={styles.container}>
            <ScrollView>

                <Text style={styles.textos}>Selecciona un vehículo</Text>
                <View style={styles.containVehiculo}>
                    <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                        {ButtonVehiculos.map((button) => (
                            <TouchableOpacity
                                key={button.id}
                                style={[styles.btnVehiculo, { backgroundColor: button.color }]}
                            >
                                <Image source={button.image} style={styles.image} />
                                <Text style={styles.txtVehiculo}>{button.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.containServicio}>
                    <TouchableOpacity style={styles.btnServicios}>
                        <Text style={styles.txtServicios}>Selecciona los servicios</Text>
                    </TouchableOpacity>


                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        data={data}
                        search
                        maxHeight={400}
                        labelField="label"
                        valueField="value"
                        placeholder="Selecciona el modelo"
                        searchPlaceholder="Buscar..."
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}

                    />



                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputPlacas}
                            placeholder="AAA0000"
                            placeholderTextColor="gray"
                            value={matricula}
                            onChangeText={handleInputChange}
                            keyboardType="default" // Cambia a "default" para aceptar letras y números
                            maxLength={7} // Limita el total de caracteres
                        />
                    </View>
                </View>

                <Text style={styles.textos}>Selecciona el color</Text>

                <View style={styles.containColor}>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{
                            gap: 12,
                            paddingHorizontal: 10
                        }}
                    >
                        {ButtonColors.map((button) => (
                            <TouchableOpacity
                                key={button.id}
                                style={[styles.btnColor, { backgroundColor: button.color }]}
                            >

                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

            </ScrollView>
        </View>
    );
}

export default RegistrarServicio;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    containVehiculo: {
        display: 'flex',
        width: '100%',
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    btnVehiculo: {
        width: 150,
        height: 100,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    txtVehiculo: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    containServicio: {
        width: '100%',
        height: '45%',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'white',
    },
    btnServicios: {
        height: 50,
        width: '93%',
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "#144E78",
        alignItems: "center",
    },
    txtServicios: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },


    image: {
        width: 70,
        height: 70,
    },

    dropdown: {
        margin: 10,
        width: '93%',
        height: 50,
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        gap: 5,
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#555',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#555',
    },
    containColor: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginVertical: 20,


    },
    btnColor: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderColor: '#ccc',
        borderWidth: .8,
        marginHorizontal: 6,

    },
    txtVehiculo: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#aaa',
    },
    textos: {
        marginHorizontal: 15,
        fontWeight: 'bold'
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        width: '93%',
        height: 50,
        borderRadius: 15,
        paddingLeft: 10,
    },

    inputPlacas: {
        paddingRight: 10,
        fontSize: 16,

    }
})