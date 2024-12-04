import { StyleSheet, View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Grafica from "../componentes/Grafica";
import GraficaP from "../componentes/GraficaP";
import { TextInput } from "react-native-paper";

const Reporte = () => {
  const [lunes, setLunes] = useState("");
  const [martes, setMartes] = useState("");
  const [miercoles, setMiercoles] = useState("");
  const [jueves, setJueves] = useState("");
  const [viernes, setViernes] = useState("");
  const [sabado, setSabado] = useState("");
  const [domingo, setDomingo] = useState("");

  const [carroChico, setCarroChico] = useState(0.2); 
  const [carroMediano, setCarroMediano] = useState(0.3); 
  const [carroGrande, setCarroGrande] = useState(0.15); 
  const [taxiUber, setTaxiUber] = useState(0.1); 
  const [moto, setMoto] = useState(0.1); 
  const [cuatrimoto, setCuatrimoto] = useState(0.1); 
  const [racer, setRacer] = useState(0.05);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Ganancias de la semana</Text>
        <Grafica
          lunes={lunes}
          martes={martes}
          miercoles={miercoles}
          jueves={jueves}
          viernes={viernes}
          sabado={sabado}
          domingo={domingo}
        />

        <Text style={styles.title}>Ingrese los valores de cada día:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputPlacas}
            label="Lunes"
            placeholder="Ej. 20"
            value={lunes.toString()}
            onChangeText={(text) => setLunes(Number(text))}
            mode="outlined"
            activeOutlineColor="#1A69DC"
            outlineColor="#ccc"
            outlineStyle={styles.inputOutline}
            theme={styles.inputTheme}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputPlacas}
            label="Martes"
            placeholder="Ej. 45"
            value={martes.toString()}
            onChangeText={(text) => setMartes(Number(text))}
            mode="outlined"
            activeOutlineColor="#1A69DC"
            outlineColor="#ccc"
            outlineStyle={styles.inputOutline}
            theme={styles.inputTheme}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputPlacas}
            label="Miércoles"
            placeholder="Ej. 28"
            value={miercoles.toString()}
            onChangeText={(text) => setMiercoles(Number(text))}
            mode="outlined"
            activeOutlineColor="#1A69DC"
            outlineColor="#ccc"
            outlineStyle={styles.inputOutline}
            theme={styles.inputTheme}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputPlacas}
            label="Jueves"
            placeholder="Ej. 80"
            value={jueves.toString()}
            onChangeText={(text) => setJueves(Number(text))}
            mode="outlined"
            activeOutlineColor="#1A69DC"
            outlineColor="#ccc"
            outlineStyle={styles.inputOutline}
            theme={styles.inputTheme}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputPlacas}
            label="Viernes"
            placeholder="Ej. 99"
            value={viernes.toString()}
            onChangeText={(text) => setViernes(Number(text))}
            mode="outlined"
            activeOutlineColor="#1A69DC"
            outlineColor="#ccc"
            outlineStyle={styles.inputOutline}
            theme={styles.inputTheme}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputPlacas}
            label="Sábado"
            placeholder="Ej. 43"
            value={sabado.toString()}
            onChangeText={(text) => setSabado(Number(text))}
            mode="outlined"
            activeOutlineColor="#1A69DC"
            outlineColor="#ccc"
            outlineStyle={styles.inputOutline}
            theme={styles.inputTheme}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputPlacas}
            label="Domingo"
            placeholder="Ej. 34"
            value={domingo.toString()}
            onChangeText={(text) => setDomingo(Number(text))}
            mode="outlined"
            activeOutlineColor="#1A69DC"
            outlineColor="#ccc"
            outlineStyle={styles.inputOutline}
            theme={styles.inputTheme}
            keyboardType="numeric"
          />
        </View>
        {/* Repetir TextInput para los otros días */}

        <Text style={styles.title}>Tipos de autos más frecuentes</Text>
        <GraficaP
          carroChico={carroChico}
          carroMediano={carroMediano}
          carroGrande={carroGrande}
          taxiUber={taxiUber}
          moto={moto}
          cuatrimoto={cuatrimoto}
          racer={racer}
        />
        <Text style={styles.title}>Ingrese los valores de tipos de autos:</Text>
<View style={styles.inputContainer}>
  <TextInput
    style={styles.inputPlacas}
    label="Carro Chico"
    placeholder="Ej. 0.2"
    value={carroChico.toString()}
    onChangeText={(text) => setCarroChico(Number(text))}
    mode="outlined"
    activeOutlineColor="#1A69DC"
    outlineColor="#ccc"
    outlineStyle={styles.inputOutline}
    theme={styles.inputTheme}
    keyboardType="numeric"
  />
</View>
<View style={styles.inputContainer}>
  <TextInput
    style={styles.inputPlacas}
    label="Carro Mediano"
    placeholder="Ej. 0.3"
    value={carroMediano.toString()}
    onChangeText={(text) => setCarroMediano(Number(text))}
    mode="outlined"
    activeOutlineColor="#1A69DC"
    outlineColor="#ccc"
    outlineStyle={styles.inputOutline}
    theme={styles.inputTheme}
    keyboardType="numeric"
  />
</View>
<View style={styles.inputContainer}>
  <TextInput
    style={styles.inputPlacas}
    label="Carro Grande"
    placeholder="Ej. 0.15"
    value={carroGrande.toString()}
    onChangeText={(text) => setCarroGrande(Number(text))}
    mode="outlined"
    activeOutlineColor="#1A69DC"
    outlineColor="#ccc"
    outlineStyle={styles.inputOutline}
    theme={styles.inputTheme}
    keyboardType="numeric"
  />
</View>
<View style={styles.inputContainer}>
  <TextInput
    style={styles.inputPlacas}
    label="Taxi/Uber"
    placeholder="Ej. 0.1"
    value={taxiUber.toString()}
    onChangeText={(text) => setTaxiUber(Number(text))}
    mode="outlined"
    activeOutlineColor="#1A69DC"
    outlineColor="#ccc"
    outlineStyle={styles.inputOutline}
    theme={styles.inputTheme}
    keyboardType="numeric"
  />
</View>
<View style={styles.inputContainer}>
  <TextInput
    style={styles.inputPlacas}
    label="Moto"
    placeholder="Ej. 0.1"
    value={moto.toString()}
    onChangeText={(text) => setMoto(Number(text))}
    mode="outlined"
    activeOutlineColor="#1A69DC"
    outlineColor="#ccc"
    outlineStyle={styles.inputOutline}
    theme={styles.inputTheme}
    keyboardType="numeric"
  />
</View>
<View style={styles.inputContainer}>
  <TextInput
    style={styles.inputPlacas}
    label="Cuatrimoto"
    placeholder="Ej. 0.1"
    value={cuatrimoto.toString()}
    onChangeText={(text) => setCuatrimoto(Number(text))}
    mode="outlined"
    activeOutlineColor="#1A69DC"
    outlineColor="#ccc"
    outlineStyle={styles.inputOutline}
    theme={styles.inputTheme}
    keyboardType="numeric"
  />
</View>
<View style={styles.inputContainer}>
  <TextInput
    style={styles.inputPlacas}
    label="Racer"
    placeholder="Ej. 0.05"
    value={racer.toString()}
    onChangeText={(text) => setRacer(Number(text))}
    mode="outlined"
    activeOutlineColor="#1A69DC"
    outlineColor="#ccc"
    outlineStyle={styles.inputOutline}
    theme={styles.inputTheme}
    keyboardType="numeric"
  />
</View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 20,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 9,
  },
  inputPlacas: {
    width: "93%",
    fontSize: 16,
  },
});

export default Reporte;
