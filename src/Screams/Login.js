import * as React from "react";
import { StyleSheet, View, Text, Button, TextInput, SafeAreaView, TouchableOpacity } from "react-native";

const Login =( {navigation} ) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
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
          keyboardType="text"
        />
      </SafeAreaView>
      {/* Final dos inputs */}
      <View style={styles.botao}>
        <Button
          title="Entrar"
          onPress={() => {
            navigation.navigate('Home', { name: 'Home' });
          }}
        />
        
        
      </View>
      {/* Final do botaoEntrar */}
      <View>

        <TouchableOpacity style={styles.EsqueceuSenha} onPress={() =>
          navigation.navigate('RecuSenha', { name: 'Recuperar Senha' })
        }>
          <Text style={styles.texto}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cadastro} onPress={() =>
          navigation.navigate('Cadastro', { name: 'Cadastro' })
        }>
          <Text style={styles.texto}>Cadastre-se</Text>
        </TouchableOpacity>

      </View>

    </View>

    /* Final do container */
  );
}

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
  botao: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 4,
  },
  EsqueceuSenha: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20,

  },
  texto: {
    fontSize: 14,
    color: '#000'
  },
  cadastro: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
   

  },

});

export default Login;



