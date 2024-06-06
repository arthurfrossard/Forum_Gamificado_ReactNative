# React Native Social Media App

Este é um aplicativo de rede social desenvolvido com React Native. Ele permite que os usuários façam login, criem postagens, visualizem postagens de outros usuários, atualizem suas próprias postagens e visualizem seu perfil de usuário.

## Funcionalidades

- **Login e Cadastro de Usuário**: Os usuários podem se registrar e fazer login no aplicativo.
- **Criação e Visualização de Postagens**: Os usuários autenticados podem criar novas postagens e visualizar uma lista de postagens existentes.
- **Atualização e Exclusão de Postagens**: Os usuários podem atualizar e excluir suas próprias postagens.
- **Perfil de Usuário**: Os usuários podem visualizar e atualizar informações de seu perfil, bem como obter sua localização atual.

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

```
.
├── components
│   ├── Login.js
│   ├── CreateUser.js
│   ├── CreatePost.js
│   ├── UpdatePost.js
│   └── Post.js
├── screens
│   ├── PostsList.js
│   └── UserProfile.js
├── App.js
└── README.md
```

### Componentes Principais

- **App.js**: O ponto de entrada do aplicativo, responsável pela navegação e estado do usuário.
- **components/Login.js**: Tela de login para autenticação de usuários.
- **components/CreateUser.js**: Tela de registro para novos usuários.
- **components/CreatePost.js**: Tela para criação de novas postagens.
- **components/UpdatePost.js**: Tela para atualização de postagens existentes.
- **components/Post.js**: Componente para renderizar uma postagem individual.
- **screens/PostsList.js**: Tela para listar todas as postagens.
- **screens/UserProfile.js**: Tela para exibir e atualizar o perfil do usuário.

## Instalação

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/arthurfrossard/Forum_Gamificado_ReactNative
    cd seu-repositorio
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Execute o aplicativo**:
    ```bash
    npm start
    ```

## Configuração do Banco de Dados

O aplicativo utiliza o Firebase Realtime Database para armazenar dados de usuários e postagens. Certifique-se de configurar as URLs do seu banco de dados corretamente nos arquivos `Login.js`, `CreateUser.js`, `CreatePost.js`, `UpdatePost.js`, e `PostsList.js`.

## Permissões

O aplicativo requer permissões para acessar a localização do usuário. Certifique-se de configurar as permissões corretamente no arquivo `app.json`:

```json
{
  "expo": {
    "name": "seu-app",
    "slug": "seu-app",
    "version": "1.0.0",
    "assetBundlePatterns": ["**/*"],
    "android": {
      "permissions": ["ACCESS_FINE_LOCATION"]
    }
  }
}
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.

---

Desenvolvido por Arthur Frossard.
