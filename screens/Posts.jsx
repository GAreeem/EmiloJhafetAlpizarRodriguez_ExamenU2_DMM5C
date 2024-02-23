import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SectionList,
  Modal,
  ScrollView,
} from "react-native";

import { Image } from "@rneui/themed";

const Post = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [content, setContent] = useState({});

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
    {
      Image: require("../assets/Shagy.png"),
      description: "god",
      likes: 10,
      username: "garem",
      userimage: require("../assets/padoruSubaru.jpg"),
    },
  ];

  const [postsH, setPosts] = useState(posts);
  const [likes, setLikes] = useState(0);

  const likePost = (item) => {
    item.likes++;
    console.log(item.likes);
    setLikes(item.likes);
  };

  const abrirModal = (item) => {
    setContent(item);
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
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/logotipo-de-texto-instagram-vectorial-fuente-silueta-negra-aislada-m%C3%A1s-reciente-para-aplicaciones-m%C3%B3viles-o-materiales-204012277.jpg",
          }}
          style={styles.logo}
        />
        <Image source={require("../assets/ig.png")} style={styles.logo2} />
      </View>

      <View style={{ backgroundColor: "black", height: 100 }}>
        <SectionList
          horizontal
          sections={[{ title: "Perfiles", data: postsH }]}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
            return (
              <View style={styles.perfilUser}>
                <Image
                  style={styles.profilePhotoNav}
                  source={item.userimage}
                  onLongPress={() => abrirModal(item)}
                  onPressOut={() => setModalVisible(false)}
                />
              </View>
            );
          }}
        />
      </View>

      <SectionList
        sections={[{ title: "Posts", data: postsH }]}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.cardPost}>
            <View style={styles.userInfo}>
              <Image source={item.userimage} style={styles.profilePhoto} />
              <Text style={styles.username}>{item.username}</Text>
            </View>
            <View>
              <Image style={styles.postImage} source={item.Image} />
            </View>
            <View style={styles.icons}>
              <TouchableOpacity onPress={() => likePost(item)}>
                <MaterialIcons name="favorite-border" size={36} color="white" />
              </TouchableOpacity>
              <MaterialIcons name="comment" size={36} color="white" />
              <MaterialIcons name="send" size={36} color="white" />
            </View>
            <Text
              style={{ justifyContent: "center", fontSize: 15, color: "white" }}
            >
              {item.likes} Personas le gusta
            </Text>
            <View style={styles.description}>
              <Text
                style={{
                  justifyContent: "center",
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {item.username}{" "}
              </Text>
              <Text
                color={"white"}
                style={{
                  justifyContent: "center",
                  fontSize: 15,
                  color: "white",
                }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
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
    height: 60, 
    marginTop: 30,
    
  },
  logo: {
    width: 100, 
    height: 40, 
    marginLeft: 10,
    resizeMode: "contain", 
  },
  logo2: {
    width: 100,
    height: 50, 
    marginRight: 10,
    resizeMode: "contain",
  },
  texto: {
    fontSize: 15,
    margin: 10,
  },
  cardPost: {
    flex: 1,
    backgroundColor: "black",
    width: "auto",
    height: "auto",
    margin: 10,
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
    borderRadius: 50,
    margin: 5,
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
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginTop: 3,
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

export default Post;
