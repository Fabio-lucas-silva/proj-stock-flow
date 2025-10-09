import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function Index() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* LOGO */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoS}>S</Text>
        <Text style={styles.logoF}>F</Text>
      </View>

      <Text style={styles.welcomeTitle}>Que bom ter você aqui!</Text>
      <Text style={styles.welcomeSubtitle}>
        Conecte-se e otimize sua gestão de estoque com o STOCK FLOW!
      </Text>

      {/* FORM */}
      <Text style={styles.label}>Login</Text>
      <TextInput placeholder="CPF ou e-mail" style={styles.input} />

      <TextInput
        placeholder="Senha"
        secureTextEntry={!showPassword}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.eyeButton}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Ionicons
          name={showPassword ? 'eye-off' : 'eye'}
          size={20}
          color="#000"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* SEPARATOR */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>Ou</Text>
        <View style={styles.line} />
      </View>

      {/* SOCIAL LOGIN */}
      <View style={styles.socialContainer}>
       
      </View>

      <Text style={styles.createAccount}>
        Ainda não tem conta? <Text style={{ fontWeight: '600' }}>CRIAR CONTA</Text>
      </Text>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  logoContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  logoS: {
    fontSize: 80,
    fontWeight: '300',
  },
  logoF: {
    fontSize: 60,
    fontWeight: '300',
    marginLeft: 4,
  },
  welcomeTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    marginTop: 10,
  },
  welcomeSubtitle: {
    textAlign: 'center',
    color: '#444',
    fontSize: 13,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    padding: 10,
    marginBottom: 16,
  },
  eyeButton: {
    position: 'absolute',
    right: 40,
    top: 290,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#000',
    fontSize: 12,
    marginBottom: 20,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#555',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  socialIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  createAccount: {
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#000',
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

