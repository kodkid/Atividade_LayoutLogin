import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, Alert, TouchableOpacity } from 'react-native';



const RecuSenha = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.titulo}> Recuperação de conta</Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Digite o email que vc usa na sua conta"
          keyboardType="text"
        />
      </SafeAreaView>
      {/* Final dos input */}
      <View style={styles.botaoContainer}>
        <Button
          title="Entrar"
          onPress={() => {
            Alert.alert('Enviamos um email para o processo de recuperação da sua conta...');
            navigation.navigate('Login', { name: 'Cadastro' });
          }}
        />


      </View>
      {/* Final do botaoContainer */}
      <TouchableOpacity style={styles.Voltar} onPress={() =>
        navigation.navigate('Login', { name: 'Login' })
      }>
        <Text style={styles.texto}>Voltar</Text>
      </TouchableOpacity>
    </View >
    /* Final do container */
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
  botaoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    marginHorizontal: 10,


  },
  botao: {
    paddingBottom: 4,
    borderRadius: 5,


  },
  Voltar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  }

});

export default RecuSenha;