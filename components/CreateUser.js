import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateUser = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateUser = async () => {
    try {
      const newUser = {
        userName,
        email,
        password,
      };

      await fetch('https://databaseusers-7fbfd-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        body: JSON.stringify(newUser),
      });

      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Novo Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Criar" onPress={handleCreateUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
});

export default CreateUser;
