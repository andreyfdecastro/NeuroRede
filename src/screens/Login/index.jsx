import React, { useState } from 'react';
import { View, TextInput, Button, Alert, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import NeuroLogo from '../../../assets/neuroLogo.png';
import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');

    if (email === '' || password === '') {
      setError('Por favor, insira um e-mail e senha válidos.');
      return;
    }

    setLoading(true);

    Alert.alert(`E-mail: ${email}, Senha: ${password}`);

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <Image style={styles.logo} source={NeuroLogo} />
      </View>
      <View style={styles.formBox}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry={true}
        />
        {error !== '' && <Text style={styles.errorText}>{error}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        {loading && <ActivityIndicator />}
      </View>
    </View>
  );
}