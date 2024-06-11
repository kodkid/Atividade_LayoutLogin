import { StyleSheet, View, Text } from "react-native";

export default function Login({ navigator }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  texto: {
    fontSize: 18,
    fontWeight: "700",
  },
});
