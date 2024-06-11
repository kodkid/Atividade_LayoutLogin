import { StyleSheet, View, Text } from "react-native";

export default function Cadastro({ navigator }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Cadastro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
  },
  texto: {
    fontSize: 18,
    fontWeight: "700",
  },
});
