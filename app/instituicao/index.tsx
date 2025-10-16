import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [selectedProfile, setSelectedProfile] = useState<string>("Almoxarifado");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>
        S<Text style={styles.logoSub}>F</Text>
      </Text>

      {/* Boas-vindas */}
      <Text style={styles.title}>Que bom ter você aqui!</Text>
      <Text style={styles.subtitle}>
        Conecte-se e otimize sua gestão de estoque com o STOCK FLOW!
      </Text>

      {/* Perfis */}
      <Text style={styles.label}>Informe seu perfil:</Text>
      <View style={styles.profileRow}>
        <TouchableOpacity
          style={[
            styles.profileButton,
            selectedProfile === "Docente" && styles.profileSelected,
          ]}
          onPress={() => setSelectedProfile("Docente")}
        >
          <Text
            style={[
              styles.profileText,
              selectedProfile === "Docente" && styles.profileTextSelected,
            ]}
          >
            Docente
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.profileButton,
            selectedProfile === "Almoxarifado" && styles.profileSelected,
          ]}
          onPress={() => setSelectedProfile("Almoxarifado")}
        >
          <Text
            style={[
              styles.profileText,
              selectedProfile === "Almoxarifado" && styles.profileTextSelected,
            ]}
          >
            Almoxarifado
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login */}
      <Text style={styles.label}>Login</Text>
      <TextInput style={styles.input} placeholder="CPF ou e-mail" />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeButton}
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#333"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* Divisor */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>Ou</Text>
        <View style={styles.divider} />
      </View>

      {/* Login social */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-facebook" size={20} color="#1877F2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-google" size={20} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-apple" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-windows" size={20} color="#0078D7" />
        </TouchableOpacity>
      </View>

      <Text style={styles.signupText}>
        Ainda não tem conta?{" "}
        <Text style={styles.signupLink}>CRIAR CONTA</Text>
      </Text>

      {/* Botão Entrar */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  logo: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#000",
  },
  logoSub: {
    fontSize: 58,
    fontWeight: "300",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
    marginBottom: 24,
  },
  label: {
    alignSelf: "flex-start",
    fontWeight: "500",
    marginBottom: 8,
  },
  profileRow: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 16,
  },
  profileButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    paddingVertical: 10,
    marginHorizontal: 4,
    alignItems: "center",
  },
  profileSelected: {
    backgroundColor: "#000",
  },
  profileText: {
    color: "#000",
    fontSize: 15,
  },
  profileTextSelected: {
    color: "#fff",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 4,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
  },
  eyeButton: {
    paddingHorizontal: 10,
  },
  forgotText: {
    alignSelf: "flex-end",
    fontSize: 12,
    color: "#333",
    marginBottom: 20,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    color: "#666",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 20,
  },
  socialButton: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  signupText: {
    fontSize: 13,
    color: "#555",
    marginBottom: 24,
  },
  signupLink: {
    fontWeight: "600",
    color: "#000",
  },
  loginButton: {
    backgroundColor: "#000",
    borderRadius: 8,
    width: "100%",
    paddingVertical: 14,
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
