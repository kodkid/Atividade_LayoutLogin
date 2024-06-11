import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, Alert } from 'react-native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const recuperarSenha = () => {
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
      <View style={styles.botaoEntrar}>
        <Button
          title="Enviar"
          onPress={() => Alert.alert('Enviamos um email para a recuperação de conta')}
        />
      </View>
      {/* Final do Enviar */}
    </View >
    /* Final do container */
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "silver",

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
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 4,
  },
});

export default recuperarSenha;