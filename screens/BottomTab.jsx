import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Post from "./Posts";
import Buscador from "./Buscador";
import Perfil from "./Perfil";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="Posts"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}
     >
      <Tab.Screen
    
        name="Post"
        component={Post}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#000",
          
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: () => (
            <MaterialIcons name="home" color={'#002e60'} size={15} />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Buscador"
        component={Buscador}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#000",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: () => (
            <MaterialIcons name="search" color={'#002e60'} size={15} />
          ),
        }}
      />

      
<Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#000",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIcon: () => (
          <Image source={require("../assets/padoruSubaru.jpg")} style={{width:50, height:50, borderRadius:100}}></Image>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
