import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}> Você logou na sua conta com sucesso </Text>
            <View style={styles.botao}>
                <Button
                    title="Voltar a tela de login"
                    onPress={() => {
                        navigation.navigate('Login', { name: 'Login' });
                    }}
                />
            </View>



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
    titulo: {
        fontSize: 24,
        color: "#000",

    },
    botao: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 4,
    },

});

export default Home;



