# RenteX-Rocketseat
## A Rentex é uma ótima alternativa para locação de automóveis de luxo.
Ele fornece uma descrição dos veiculos juntamente com um caléndario para o agendamento da locação.

<h1 align="center">
  🚗 RentX 🚗 
</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-funcionalidade">Funcionalidades</a> • 	
 <a href="#-tecnologias">Tecnologias</a>  
</p>

---
## ⚙Sobre

Projeto de uma locadora de carros digital e fictícia, consumindo API local possuindo todas as funcionalidade necessária para a locação do veiculo, como tela de detalhes do veículo, tela de agendamento de locação e etc.

---


## 📱Aplicanção

<img title="GoFinances" src="./Capa.png" />
  
---  

## 🎨Layout

O layout foi fornecido pala Rocketseat 
- [Figma](https://www.figma.com/file/gP4HQZjSwU9fkomMimCn2Z/RentX-Ignite)

  --- 
  
### 🛠Tecnologias Utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Styled-components](https://styled-components.com/docs/basics)
- [App loading](https://docs.expo.dev/versions/latest/sdk/app-loading/)
- [Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font)
- [Axios](https://github.com/axios/axios)
- [Stack Stack](https://reactnavigation.org/docs/hello-react-navigation/)
- [Calendars](https://github.com/wix/react-native-calendars)
- [Helpers X](https://github.com/ptelad/react-native-iphone-x-helper)
- [Svg Transformer](https://github.com/kristerkari/react-native-svg-transformer)
- [Responsive Font](https://www.npmjs.com/package/react-native-responsive-fontsize)
- [Json Server](https://www.npmjs.com/package/json-server)

### 🛠Requisitos de software

- Instalar o [yarn](https://yarnpkg.com/)
- Instalar e configurar o [Android Studio](https://developer.android.com/studio)
- Baixar e configurar o [backend] da aplicação(https://github.com/LaurentinoMarcelo/RentX-Rocketseat)

---

<h1>
  Como utilizar ⚠️
</h1>

 <h2> Para rodar o projeto, basta executar os seguintes comandos, em seu terminal com git <h2/>
 
  # Faça um clone do repositório
```  
  git clone <link-do-repositório>
```
  # Navegue até a pasta do projeto e baixe as dependências<h3/>
```
  cd gofinance && yarn
```
  # Rode o metro bundler<h3/>
```
  yarn start
```
  # E, em outro terminal, execute
```
  yarn android # ou yarn ios
```
  
  
  <h4> Obs: É muito importante que o back-end esteja rodando, quando você inciar o app </h4>
  
  - Nota do autor
  
  <h4> Dentro da pasta do projeto, em src/services/api.ts, você vai encontrar a configuração que conecta o app ao back-end. Ele vai ser assim: </h4>
  
  
 ```
  import axios from 'axios';

  const api = axios.create({
     baseURL: 'http://<um-ip-qualquer>:3333/',
   });

   export default api;
 ```
    
    
  <h4>Se você estiver rodando o projeto dentro do Android Studio, troque o campo "um-ip-qualquer", junto com os sinais de maior e menor, 
  por "10.0.2.2", que equivale ao localhost, dentro da plataforma. Porém, se você decidir rodar o app em seu dispositivo físico, subistitua esse campo
  pelo ip atual do seu computador.</h4>
  
  ## 📝Licença
  <h4> Esse projeto se encontra sob a licença MIT. Para mais informações, acesse o arquivo LICENSE.</h4>
