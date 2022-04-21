# Microsserviço de Envio de Email

# Status da Aplicação
<p>🔥 Aplicação Finalizada</p>

# Features
- Envio de Email

# Tecnologias
- Node
- Typescript
- Kafka
- Nodemailer
- Jest

# Instalação

Você precisa ter instalado em sua máquina o Node, GIT, o pacote Yarn instalado de forma global e o Docker, após isso rode o seguinte comando: 
```sh
  git clone https://github.com/JPedro910/kafka-email-sending-microservice.git
```
Após clonar a aplicação, entre em sua pasta e rode o seguinte comando:
```sh
  yarn install
```
# Execução

Após a instalação, substitua no arquivo de variáveis de ambiente de teste o email e senha que a aplicação pede, você deve permitir o acesso do nodemailer a seu email, após isso rode o seguinte comando:
```sh
  yarn test
```
Após executar os testes, faça a composição com os containers que possibilitam executar o kafka em desenvolvimento, para isso rode o seguinte comando:
```sh
  docker-compose up -d
```
Após fazer a composição dos containers, rode o seguinte comando:
```sh
  yarn dev
```
