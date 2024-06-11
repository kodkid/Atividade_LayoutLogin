import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screams/Login";
import Cadastro from "./Screams/Cadastro";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Tela de Login" }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Tela de Cadastro" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    color: "#000",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  botaoEntrar: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 4,
  },
});

export default App;
