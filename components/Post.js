import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Post = ({ id, title, description, userName, keyWords = [], likes, dislikes, currentUser, onEdit, onDelete }) => {
  const isCreator = currentUser?.userName === userName;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.publicationDate}>Publicado por {userName}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.keyWords}>Palavras-chave: {keyWords.join(', ')}</Text>
      <Text>Curtidas: {likes}</Text>
      <Text>Descurtidas: {dislikes}</Text>
      {isCreator && (
        <View style={styles.buttons}>
          <Button title="Editar" onPress={onEdit} />
          <Button title="Excluir" onPress={onDelete} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  publicationDate: {
    fontSize: 14,
    color: '#555',
  },
  description: {
    fontSize: 16,
  },
  keyWords: {
    fontSize: 14,
    color: '#888',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Post;
