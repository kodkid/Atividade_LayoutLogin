import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import recuperarSenha from "./Screams/recuperarSenha";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  // const navigation = useNavigation();

  const RecuperarSenha = () => {
    Alert.alert("Vc solicitou para mudar a senha");
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.titulo}> Realize o seu login</Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Digite o seu Nome/Email"
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Digite sua senha"
            keyboardType="numeric"
          />
        </SafeAreaView>
        {/* Final dos inputs */}
        <View style={styles.botaoEntrar}>
          <Button
            title="Entrar"
            onPress={() => Alert.alert("Você Realizou login")}
          />
        </View>
        {/* Final do botaoEntrar */}
        <View>
          <TouchableOpacity onPress={RecuperarSenha}>
            <Text>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
      /* Final do container */
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
