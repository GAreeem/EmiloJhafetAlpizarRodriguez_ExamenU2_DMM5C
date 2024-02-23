import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const Buscador = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.arriba} />
      </View>

      <View style={styles.alado}>
      <MaterialIcons name="search" color={"#fff"} size={15} />

        <TextInput
          style={styles.texto}
          placeholder="Buscar"
          placeholderTextColor="white"
        ></TextInput>
      </View>
      <View style={styles.containerfotos}>
        <Image style={styles.img} source={require("../assets/bat.png")} />
        <Image style={styles.img} source={require("../assets/fort.jpg")} />
        <Image style={styles.img} source={require("../assets/Shagy.png")} />
      </View>
      <View style={styles.containerfotos}>
        <Image style={styles.img} source={require("../assets/tryhard.jpg")} />
        <Image style={styles.img} source={require("../assets/fort.jpg")} />
        <Image style={styles.img} source={require("../assets/Shagy.png")} />
      </View>
      <View style={styles.containerfotos}>
        <Image style={styles.img} source={require("../assets/tryhard.jpg")} />

        <Image style={styles.img} source={require("../assets/bat.png")} />
        <Image
          style={styles.img}
          source={{
            uri: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  arriba: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 60,
    marginTop: 30,
  },
  texto: {
    fontSize: 15,
    margin: 10,
    color: "#A4A4A4",
    borderWidth: 1,
    borderColor: "#A4A4A4",
    borderRadius: 10,
    padding: 10,
    width: 250,
  },
  containerfotos: {
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  img: {
    width: 100,
    height: 100,
    margin: 5,
  },
  alado: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Buscador;
