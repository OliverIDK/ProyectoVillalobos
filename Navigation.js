import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Usuarios from "./screens/Usuarios";
import Servicios from "./screens/Servicios";
import Inventario from "./screens/Inventario";
import RegistrarServicio from "./screens/RegistrarServicio";
import Reporte from "./screens/Reporte";
import Icon from "@expo/vector-icons/Entypo";
import AddUser from "./screens/AddUser";
import EditUser from "./screens/EditUser";
import AddProduct from "./screens/AddProduct";
import EditProduct from "./screens/EditProduct";
import EditServicio from "./screens/EditServicio";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddUsuario"
        component={AddUser}
        options={{
          title: 'Añadir Usuario',
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen
        name="EditUsuario"
        component={EditUser}
        options={{
          title: 'Editar usuario',
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
            <Stack.Screen
        name="EditServicio"
        component={EditServicio}
        options={{
          title: 'Editar Servicio',
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />

      <Stack.Screen
        name="AddProducto"
        component={AddProduct}
        options={{
          title: 'Añadir Producto',
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      /><Stack.Screen
        name="EditProducto"
        component={EditProduct}
        options={{
          title: 'Editar Producto',
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />

      <Stack.Screen
        name="TapGroup"
        component={TabGroup}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        animation: "shift",
        headerShadowVisible: false,
        tabBarActiveTintColor: "#144E78",
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name == "Home") {
            iconName = "home";
          } else if (route.name == "Usuarios") {
            iconName = "users";
          } else if (route.name == "Servicios") {
            iconName = "inbox";
          } else if (route.name == "Inventario") {
            iconName = "clipboard";
          } else if (route.name == "Reporte") {
            iconName = "bar-graph";
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{title:"Actividad"}} />
      <Tab.Screen name="Usuarios" component={Usuarios} />
      <Tab.Screen name="Servicios" component={RegistrarServicio} options={{ title: "Agregar Servicio" }} />
      <Tab.Screen name="Inventario" component={Inventario} />
      <Tab.Screen name="Reporte" component={Reporte} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}