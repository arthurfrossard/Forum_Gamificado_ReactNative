import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DataBaseTopics = 'https://databasetopics-bbae0-default-rtdb.firebaseio.com/';

const CreatePost = ({ navigation, user }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keyWords, setKeyWords] = useState('');

  const handleCreatePost = async () => {
    try {
      const newPost = {
        title,
        description,
        keyWords: keyWords.split(',').map(kw => kw.trim()),
        userName: user.userName,
        likes: 0,
        dislikes: 0,
      };

      await fetch(`${DataBaseTopics}/topics.json`, {
        method: 'POST',
        body: JSON.stringify(newPost),
      });

      navigation.navigate('PostsList');
    } catch (error) {
      console.error('Erro ao criar post:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Novo Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Palavras-chave (separadas por vírgula)"
        value={keyWords}
        onChangeText={setKeyWords}
      />
      <Button title="Criar" onPress={handleCreatePost} />
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

export default CreatePost;
