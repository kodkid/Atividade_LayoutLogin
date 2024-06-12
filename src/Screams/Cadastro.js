import * as React from "react";
import { StyleSheet, View, Text, Button, TextInput, SafeAreaView, TouchableOpacity, Alert } from "react-native";

const Cadastro =( {navigation} ) => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.titulo}> Realize o seu Cadastro</Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Digite o email que vc deseja cadastrar"
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Digite sua senha"
          keyboardType="text"
        />
          <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Confirme sua senha"
          keyboardType="text"
        />
      </SafeAreaView>
      {/* Final dos inputs */}
      <View style={styles.botao}>
        <Button
          title="Entrar"
          onPress={() => Alert.alert('Você Realizou login')}
        />
        
      </View>
      {/* Final do botaoEntrar */}
      <View>

        <TouchableOpacity style={styles.EsqueceuSenha} onPress={() =>
          navigation.navigate('RecuSenha', { name: 'Recuperar Senha' })
        }>
          <Text style={styles.texto}>Esqueceu a senha?</Text>
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
    justifyContent: 'flex-end',
    alignItems: 'flex-end', 
    padding: 20,

  },
  texto: {
    fontSize: 14,
    color: '#000'
  }

});

export default Cadastro;



