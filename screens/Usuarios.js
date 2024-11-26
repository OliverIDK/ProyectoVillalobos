import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

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
      <View style={styles.body}>
        <ScrollView>
          
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('AddUsuario')}>
        <Icon name="circle-with-plus" size={65} color="#144E78" />
      </TouchableOpacity>
    </View>
  );
};

export default Usuarios;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    margin: 15,
    width: 350,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  icon: {
    padding: 10,
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
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
  btnText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
});
