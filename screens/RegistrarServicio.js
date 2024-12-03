import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Modal, Portal, PaperProvider } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Nissan', value: '1' },
    { label: 'Honda', value: '2' },
    { label: 'Chevrolet', value: '3' },
    { label: 'Ford', value: '4' },
    { label: 'Audi', value: '5' },
    { label: 'KIA', value: '6' },
];

const ButtonVehiculos = [
    { id: 1, imageDefault: require("../assets/iconosVehiculos/carroChico.png"), imageSelected: require("../assets/iconosVehiculos/carroChicoSelected.png"), label: 'Carro chico' },
    { id: 2, imageDefault: require("../assets/iconosVehiculos/carroMediano.png"), imageSelected: require("../assets/iconosVehiculos/carroMedSelected.png"), label: 'Carro mediano' },
    { id: 3, imageDefault: require("../assets/iconosVehiculos/carroGrande.png"), imageSelected: require("../assets/iconosVehiculos/carroGrandeSelected.png"), label: 'Carro Grande' },
    { id: 4, imageDefault: require("../assets/iconosVehiculos/taxi.png"), imageSelected: require("../assets/iconosVehiculos/taxiSelected.png"), label: 'Taxi/Uber' },
    { id: 5, imageDefault: require("../assets/iconosVehiculos/moto.png"), imageSelected: require("../assets/iconosVehiculos/motoSelected.png"), label: 'Moto' },
    { id: 6, imageDefault: require("../assets/iconosVehiculos/cuatrimoto.png"), imageSelected: require("../assets/iconosVehiculos/cuatrimotoSelected.png"), label: 'Cuatrimoto' },
    { id: 7, imageDefault: require("../assets/iconosVehiculos/racer.png"), imageSelected: require("../assets/iconosVehiculos/racerSelected.png"), label: 'Racer' },
];

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
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [selectedButtonId, setSelectedButtonId] = useState(null); // Estado para el botón seleccionado

    const handlePress = (id) => {
        setSelectedButtonId(id); // Cambia el estado al ID seleccionado
    };

    const [selectedColorId, setSelectedColorId] = useState(null); // Estado para color seleccionado

    const handleColorPress = (id) => {
        setSelectedColorId(id); // Actualiza el estado con el ID del color seleccionado
    };

    const [text, setText] = React.useState("");

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, marginHorizontal: 20, borderRadius: 10 };

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
        <PaperProvider>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.textos}>Selecciona un vehículo</Text>
                    <View style={styles.containVehiculo}>
                        <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                            {ButtonVehiculos.map((button) => (
                                <TouchableOpacity
                                    key={button.id}
                                    style={[
                                        styles.btnVehiculo,
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
                                            styles.txtVehiculo,
                                            { color: selectedButtonId === button.id ? '#FFFFFF' : '#6B6B6B' } // Cambia el color del texto dinámicamente
                                        ]}
                                    >
                                        {button.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={styles.containServicio}>
                        <TouchableOpacity style={styles.btnServicios} onPress={showModal}>
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
                            <TextInput
                                style={styles.inputPlacas}
                                label="Placas" // Texto que aparece como borde superior
                                value={text}
                                onChangeText={(text) => setText(text)}
                                mode="outlined" // Estilo con borde
                                outlineStyle={{
                                    borderRadius: 15, // Aplica un borde redondeado
                                    borderColor: "#ccc", // Color del borde
                                    borderWidth: 1, // Grosor del borde
                                }}
                                textColor='#555'
                                theme={{
                                    colors: {
                                        primary: "#555", // Color del borde y del texto cuando está enfocado
                                        background: "#fff", // Fondo del TextInput
                                        placeholder: "#555", // Color del placeholder
                                        text: "#555", // Color del texto ingresado

                                    },
                                }}
                            />
                        </View>
                    </View>
                    <Text style={styles.textos}>Selecciona el color</Text>
                    <View style={styles.containColor}>
                        <ScrollView
                            horizontal
                            contentContainerStyle={{
                                gap: 12,
                                paddingHorizontal: 10,
                            }}
                        >
                            {ButtonColors.map((button) => (
                                <TouchableOpacity
                                    key={button.id}
                                    onPress={() => handleColorPress(button.id)} // Maneja la selección de color
                                    style={[
                                        styles.btnColor,
                                        {
                                            backgroundColor: button.color,
                                            borderWidth: selectedColorId === button.id ? 3 : 0.6, // Borde dinámico
                                            borderColor: selectedColorId === button.id ? '#1A69DC' : '#ccc', // Color del borde
                                        },
                                    ]}
                                />
                            ))}
                        </ScrollView>
                    </View>
                    <Text style={styles.textos}>Agregar Captura</Text>
                </ScrollView>
                {/* Modal */}
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
                        <Text>Selecciona el servicio que deseas agregar</Text>
                    </Modal>
                </Portal>
            </View>
        </PaperProvider>
    );
};



export default RegistrarServicio;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    modalContainer: {
        width: '95%', // Ancho del modal
        height: '80%', // Alto del modal
        backgroundColor: '#fff', // Color de fondo del modal
        borderRadius: 15, // Esquinas redondeadas
        padding: 20, // Espaciado interno
        alignSelf: 'center', // Centrado en el contenedor
    },
    modalText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    containVehiculo: {
        display: 'flex',
        width: '100%',
        height: 125,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    btnVehiculo: {
        width: 150,
        height: 115,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    txtVehiculo: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
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
        backgroundColor: "#B3D0FB",
        alignItems: "center",
    },
    txtServicios: {
        color: 'black',
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
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginVertical: 15,
        marginBottom: 5,


    },
    btnColor: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderColor: '#ccc',
        borderWidth: .8,
        marginHorizontal: 6,
    },
    textos: {
        marginHorizontal: 15,
        fontWeight: 'bold'
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    inputPlacas: {
        width: '93%',
        fontSize: 16,
    }
})