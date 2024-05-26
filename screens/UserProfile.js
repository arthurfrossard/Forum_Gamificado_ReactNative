import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfile = ({ navigation, user, setUser }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setCurrentUser(JSON.parse(userData));
      }
    };

    getUserData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
    navigation.navigate('Login');
  };

  if (!currentUser) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de {currentUser.userName}</Text>
      <Text>Email: {currentUser.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
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
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default UserProfile;
