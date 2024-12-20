import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Modal, Alert } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from '@expo/vector-icons/Entypo';
import { CheckBox } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";


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

const servicios = [
    { id: 1, name: "Lavado exterior" },
    { id: 2, name: "Lavado interior" },
    { id: 3, name: "Encerado" },
    { id: 4, name: "Pulido" },
    { id: 5, name: "Lavado completo" },
];



const EditServicio = () => {
    const navigation = useNavigation();

    const [checks, setChecks] = useState(
        servicios.reduce((acc, servicio) => { 
            acc[servicio.id] = false;
            return acc;
        }, {})
    );

    const toggleService = (id) => {
        setChecks((prevChecks) => ({
            ...prevChecks,
            [id]: !prevChecks[id],
        }));
    };

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [selectedButtonId, setSelectedButtonId] = useState(null);

    const handlePress = (id) => {
        setSelectedButtonId(id);
    };

    const [selectedColorId, setSelectedColorId] = useState(null);

    const handleColorPress = (id) => {
        setSelectedColorId(id);
    };

    const [text, setText] = React.useState("");

    const [modalVisible, setModalVisible] = useState(false);


    return (
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
                                        { color: selectedButtonId === button.id ? '#FFFFFF' : '#6B6B6B' }
                                    ]}
                                >
                                    {button.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.containServicio}>
                    <TouchableOpacity style={styles.btnServicios} onPress={() => setModalVisible(true)}>
                        <Text style={styles.txtServicios}>Selecciona los servicios</Text>
                    </TouchableOpacity>
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
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputPlacas}
                            label="Placas"
                            placeholder="Ej. JW-60-261"
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
                                    onPress={() => handleColorPress(button.id)}
                                    style={[
                                        styles.btnColor,
                                        {
                                            backgroundColor: button.color,
                                            borderWidth: selectedColorId === button.id ? 3 : 0.6,
                                            borderColor: selectedColorId === button.id ? '#1A69DC' : '#ccc',
                                        },
                                    ]}
                                />
                            ))}
                        </ScrollView>
                    </View>
                    <Text style={styles.textos}>Agregar Captura</Text>
                    <TouchableOpacity style={styles.btnCapturaImagen}>
                        <Icon
                            size={60}
                            name="camera"
                        />
                    </TouchableOpacity>
                    <Text style={styles.txtTotal}>Total:</Text>
                    <View style={styles.containTotal}>
                        <Text style={{ fontSize: 25, color: 'lightblack', fontWeight: 'bold' }}>MX$</Text>
                        <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>600</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.btnRegistrarServicio, { marginBottom: 20 }]}
                        onPress={() =>
                            Alert.alert(
                                "Servicio editado",
                                "Se editó el servicio con éxito",
                                [
                                    {
                                        text: "OK",
                                        onPress: () => navigation.goBack(),
                                    },
                                ],
                                { cancelable: false }
                            )
                        }
                    >

                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Editar Servicio</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.btnCerrarModal} onPress={() => setModalVisible(false)}>
                            <Icon
                                color="gray"
                                size={25}
                                name="circle-with-cross"
                            />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Selecciona los servicios</Text>
                        {servicios.map((servicio) => (
                            <CheckBox
                                key={servicio.id}
                                alignSelf="flex-start"
                                iconRight
                                title={servicio.name}
                                checked={checks[servicio.id]}
                                size={25}
                                onPress={() => toggleService(servicio.id)}
                                wrapperStyle={{
                                    flexDirection: "row",
                                    width: "100%",
                                }}
                                textStyle={{ flex: 1, textAlign: "left", fontSize: 16 }}
                            />
                        ))}
                        <TouchableOpacity
                            style={[styles.btnRegistrarServicio, {
                                width: 120,
                                height: 40,
                                position: 'absolute',
                                right: 15,
                                bottom: 15,
                            }]}
                            onPress={() =>
                                Alert.alert(
                                    "Servicios editados con éxito",
                                    "Se agregaron los servicios al vehículo",
                                    [
                                        {
                                            text: "OK",
                                            onPress: () => setModalVisible(true),
                                        },
                                    ],
                                    { cancelable: false } 
                                )
                            }>
                            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Agregar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>

    );
};



export default EditServicio;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
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
        borderWidth: 1.5,
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
    textos: {
        marginHorizontal: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    inputPlacas: {
        width: '93%',
        fontSize: 16,
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
    btnCapturaImagen: {
        height: 200,
        width: '93%',
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "#ccc",
        alignItems: "center",
    },
    txtTotal: {
        fontSize: 17,
        marginHorizontal: 15,
        fontWeight: 'bold',
        marginTop: 30,
    },
    containTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnRegistrarServicio: {
        marginTop: 15,
        width: '93%',
        height: 50,
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
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#fff",
        paddingTop: 20,
        borderRadius: 10,
        alignItems: "center",
        width: "80%",
        height: '50%',
    },
    modalTitle: {
        alignSelf: 'flex-start',
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#1A69DC",
        paddingLeft: 25,
    },
    btnCerrarModal: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
});
