<h1>OFICINA APP</h1>

- Estrutura do projeto
  <p>
  O código react-native encontra-se dentro da pasta src. Na raiz da pasta src, encontramos o arquivo componente App(index.js) que envolve toda aplicação.
  <p>

<ul>
  <li>components -> Armazena os componentes reutilizáveis da aplicação. Ex: Header.js </li>
  <li>services -> armazena dados de serviços externos , como por exemplo a URL_BASE da api.</li>
  <li>pages -> armazena as telas do app. Cada tela contém um arquivo index.js e um style.js</li>
  <li>styles -> armazena estilos globais da aplicação. Ex: cores, métricas e etc ... </li>
</ul>

<hr>
- Dependências utilizadas
<ul>
    <li>axios -> cliente http utilizado para realizar as requisições a api</li>
      <li>prop-types -> utilizado para realiza verificação de tipo em tempo de execução para propriedades(props) React</li>
      <li>react-native-modal -> Lib com componentes reutilizáveis de Modal</li>
      <li>react-native-status-bar-height -> Utilizado para o tratamento dos styles em dispositivos ios</li>
      <li> Eslint - Foi utilizado para padronizar o style guide do código segundo as recomendações do airbnb</li>
</ul>

<hr>
- Instruções
<ul>
    <li>
    Para simular a solução do oficina app é necessário ter um ambiente bem configurado. Segue a melhor refêrencia de instalação desse ambiente: https://docs.rocketseat.dev/ambiente-react-native/introducao
     </li> 
    <li>Na pasta raiz do projeto, execute o comando yarn install </li>
    <li>Execute o comando react-native run-android. É necessário já ter um emulador rodando.</li>
</ul>
