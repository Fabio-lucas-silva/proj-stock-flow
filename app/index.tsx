import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      // usar URI temporariamente para testar se o 500 é por asset faltando
      source={{ uri: "https://via.placeholder.com/800x1400.png?text=Background" }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* Logo e texto principal */}
        <View style={styles.textContainer}>
          <Text style={styles.logo}>
            S<Text style={styles.logoSub}>F</Text>
          </Text>
          <Text style={styles.subtitle}>
            Controle total do seu estoque,{"\n"}
            com o fluxo que seu negócio precisa.
          </Text>
        </View>

        {/* Botões */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/docente")}
            accessibilityLabel="Entrar como docente"
          >
            <Ionicons name="person-outline" size={18} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}> Docente</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/instituicao")}
            accessibilityLabel="Entrar como instituição"
          >
            <Ionicons name="business-outline" size={18} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}> Instituição</Text>
          </TouchableOpacity>
        </View>

        {/* Rodapé */}
        <Text style={styles.footer}>Selecione seu perfil de acesso para continuar</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "flex-end", paddingHorizontal: 24, paddingBottom: 40 },
  textContainer: { marginBottom: 40 },
  logo: { fontSize: 64, fontWeight: "bold", color: "#fff" },
  logoSub: { fontWeight: "300", fontSize: 56 },
  subtitle: { color: "#fff", fontSize: 16, marginTop: 8, lineHeight: 22 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  button: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "transparent", borderColor: "#fff", borderWidth: 1, borderRadius: 8, paddingVertical: 12, marginHorizontal: 4 },
  icon: { marginRight: 8 },
  buttonText: { color: "#fff", fontSize: 15, fontWeight: "500" },
  footer: { color: "#ccc", textAlign: "center", fontSize: 13, marginTop: 10 },
});
