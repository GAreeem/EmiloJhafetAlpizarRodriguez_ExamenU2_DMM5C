import { View, StyleSheet, SectionList,Modal } from "react-native";
import { Card, Image, Text } from "@rneui/themed";
import { useState } from "react";
const Perfil = () => {
  const posts = [
    {
      Image: require("../assets/bat.png"),
      description: "negro",
      likes: 0,
      username: "emi",
      userimage: require("../assets/padoruSubaru.jpg"),
    },
    {
      Image: require("../assets/Shagy.png"),
      description: "god",
      likes: 10,
      username: "garem",
      userimage: require("../assets/padoruSubaru.jpg"),
    },
    {
      Image: require("../assets/Shagy.png"),
      description: "god",
      likes: 10,
      username: "garem",
      userimage: require("../assets/padoruSubaru.jpg"),
    },
  ];

  const [postsH, setPosts] = useState(posts);
  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = (item) => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>

<Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Image
            style={styles.imagen}
            source={require("../assets/amongUTEZ.png")}
          />
        </View>
      </Modal>
      <View style={styles.navbar}>
        <View>
          <Image
            source={require("../assets/padoruSubaru.jpg")}
            style={{
              width: 100,
              height: 70,
              borderRadius: 100,
              marginLeft: 10,
            }}
          />
          <Text style={{ color: "white", marginLeft: 40 }}> Emilio</Text>
        </View>

        <View>
          <Text style={{ color: "white", marginLeft: 30 }}> 9</Text>
          <Text style={{ color: "white" }}> Publicaciones</Text>
        </View>
        <View>
          <Text style={{ color: "white", marginLeft: 15 }}> 1000</Text>
          <Text style={{ color: "white" }}> Seguidores</Text>
        </View>
        <View>
          <Text style={{ color: "white" }}> 250</Text>
          <Text style={{ color: "white" }}> Seguidos</Text>
        </View>

    
      </View>
      <View style={{ backgroundColor: "black", height: 100 }}>
        <SectionList
          horizontal
          sections={[{ title: "Perfiles", data: postsH }]}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
            return (
              <View style={styles.perfilUser}>
                <Image style={styles.profilePhotoNav} source={item.userimage} onLongPress={()=>setModalVisible(true)} onPressOut={()=>{setModalVisible(false)}} />
              </View>
            );
          }}
        />
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
    justifyContent: "flex-start",
    backgroundColor: "black",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    height: 80,
    marginTop: 50,
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    resizeMode: "contain",
  },
  logo2: {
    width: 100,
    height: 50,
    marginRight: 10,
    resizeMode: "contain",
  },

  userInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
  },
  profilePhotoNav: {
    width: 80,
    height: 80,
    marginLeft: 30,
    borderRadius: 50,
    margin: 5,
    justifyContent: "space-between",
  },
  username: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    marginLeft: 3,
  },
  postImage: {
    width: "auto",
    height: 200,
  },

  modalView: {
    margin: 20,
    backgroundColor: "rgb(161 161 161)",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerfotos: {
    margin:15,
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  img: {
    width: 100,
    height: 100,
    margin: 3,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgba(161 161 161,)",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5,
  },
  imagen: {
    height: 150,
    width: 150,
    marginBottom: 20,
    borderRadius: 20,
  },
});

export default Perfil;
