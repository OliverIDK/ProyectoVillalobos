import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Vehiculo = () => {
    return (
        <TouchableOpacity style={styles.btnVehiculo}>
            <Image style={styles.iconVehiculo} source={require("../assets/moto.png")} />
            <Text style={styles.txtVehiculo}>Moto</Text>
        </TouchableOpacity>
    )
}

export default Vehiculo

const styles = StyleSheet.create({

        btnVehiculo: {
            width: '90%',           
            height: 150,
            backgroundColor: 'white',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#ccc',
            borderWidth: 1,
            marginBottom: 15,
            marginRight:7,
            marginLeft:12,
        },
        iconVehiculo: {
            width: 80,
            height: 80,
        },
        txtVehiculo: {
            marginTop: 10,
            textAlign: 'center',
        },



})