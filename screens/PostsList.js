import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Post from '../components/Post';

const DataBaseTopics = 'https://databasetopics-bbae0-default-rtdb.firebaseio.com/';

const PostsList = ({ navigation, user, setUser }) => {
  const [postsData, setPostsData] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${DataBaseTopics}/topics.json`);
      const data = await response.json();

      if (data) {
        const posts = Object.keys(data).map(id => ({ id, ...data[id] }));
        setPostsData(posts);
      } else {
        setPostsData([]);
      }
    } catch (error) {
      console.error('Erro ao buscar os tópicos:', error);
      setPostsData([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, [])
  );

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);
    navigation.navigate('Login');
  };

  const handleEditPost = (postId) => {
    navigation.navigate('UpdatePost', { postId });
  };

  const handleDeletePost = (postId) => {
    Alert.alert(
      'Confirmação',
      'Você tem certeza que deseja excluir este post?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: async () => {
            try {
              await fetch(`${DataBaseTopics}/topics/${postId}.json`, {
                method: 'DELETE',
              });
              fetchPosts();
            } catch (error) {
              console.error('Erro ao excluir o post:', error);
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {user && <Button title="Logout" onPress={handleLogout} />}
      <FlatList
        data={postsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Post
            {...item}
            currentUser={user}
            onEdit={() => handleEditPost(item.id)}
            onDelete={() => handleDeletePost(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default PostsList;
