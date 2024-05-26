import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './components/Login';
import CreateUser from './components/CreateUser';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import PostsList from './screens/PostsList';
import UserProfile from './screens/UserProfile';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="PostsList">
        <Drawer.Screen name="Home">
          {props => <PostsList {...props} user={user} setUser={setUser} />}
        </Drawer.Screen>
        <Drawer.Screen name="Login">
          {props => <Login {...props} setUser={setUser} />}
        </Drawer.Screen>
        <Drawer.Screen name="Cadastrar" component={CreateUser} />
        <Drawer.Screen name="Postar">
          {props => <CreatePost {...props} user={user} />}
        </Drawer.Screen>
        <Drawer.Screen name="Perfil">
          {props => <UserProfile {...props} user={user} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
