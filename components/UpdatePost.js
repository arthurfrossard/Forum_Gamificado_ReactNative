import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DataBaseTopics = 'https://databasetopics-bbae0-default-rtdb.firebaseio.com/';

const UpdatePost = ({ route, navigation }) => {
  const { postId } = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keyWords, setKeyWords] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${DataBaseTopics}/topics/${postId}.json`);
        const postData = await response.json();
        setTitle(postData.title);
        setDescription(postData.description);
        setKeyWords(postData.keyWords.join(', '));
      } catch (error) {
        console.error('Erro ao buscar o post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleUpdate = async () => {
    try {
      const updatedPost = {
        title,
        description,
        keyWords: keyWords.split(',').map(kw => kw.trim()),
      };

      await fetch(`${DataBaseTopics}/topics/${postId}.json`, {
        method: 'PATCH',
        body: JSON.stringify(updatedPost),
      });

      navigation.goBack();
    } catch (error) {
      console.error('Erro ao atualizar o post:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Post</Text>
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
      <Button title="Atualizar" onPress={handleUpdate} />
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

export default UpdatePost;
