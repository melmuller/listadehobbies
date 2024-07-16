# Lista de Hobbies

Este projeto faz uso de componentes funcionais, props e hooks, com o objetivo de criar uma aplicação simples e objetiva.

## Tema
O tema desta aplicação é "Lista de Hobbies". A aplicação permite adicionar, visualizar e remover hobbies.

## Estrutura do Projeto

- **App.js**: Componente principal que gerencia a aplicação.
- **HobbiesList.js**: exibe a lista de hobbies.
- **HobbyForm.js**: adiciona novos hobbies.
- **App.css**: Estilização.

## Componentes
- App.js: Gerencia o estado da aplicação. Utilizando o hook useState para manter a lista de hobbies, adicionar e remover hobbies.

- HobbiesList.js: recebe a lista de hobbies e a função de remover hobbies. Ele exibe a lista de hobbies em um elemento <ul> e permite remover itens da lista através de um botão.

- HobbyForm.js: Gerencia o formulário de adição de novos hobbies. Ele utiliza o hook useState para controlar o valor do input e envia o novo hobby para o componente App quando o formulário é enviado.

