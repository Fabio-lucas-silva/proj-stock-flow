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
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>
        S<Text style={styles.logoSub}>F</Text>
      </Text>

      {/* Saudação */}
      <Text style={styles.welcome}>Que bom ter você aqui!</Text>
      <Text style={styles.subtext}>
        Conecte-se e otimize sua gestão de estoque com o STOCK FLOW!
      </Text>

      {/* Seleção de perfil */}
      <Text style={styles.label}>Informe seu perfil:</Text>
      <View style={styles.profileContainer}>
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

      {/* Campos de login */}
      <Text style={styles.label}>Login</Text>
      <TextInput style={styles.input} placeholder="CPF ou e-mail" />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Senha"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeButton}
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="#555"
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
          <Ionicons name="logo-facebook" size={20} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-google" size={20} color="#db4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-apple" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-windows" size={20} color="#0078d7" />
        </TouchableOpacity>
      </View>

      <Text style={styles.signupText}>
        Ainda não tem conta?{" "}
        <Text style={styles.signupLink}>CRIAR CONTA</Text>
      </Text>

      {/* Botão entrar */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 24,
  },
  logo: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#000",
  },
  logoSub: {
    fontSize: 56,
    fontWeight: "300",
  },
  welcome: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
  },
  subtext: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 6,
    fontWeight: "500",
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginBottom: 12,
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
  inputPassword: {
    flex: 1,
    padding: 12,
  },
  eyeButton: {
    paddingHorizontal: 10,
  },
  forgotText: {
    alignSelf: "flex-end",
    color: "#333",
    fontSize: 12,
    marginBottom: 20,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
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
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  socialButton: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    color: "#666",
    marginBottom: 24,
  },
  signupLink: {
    color: "#000",
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#000",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    width: "100%",
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
