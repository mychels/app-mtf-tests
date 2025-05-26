# Meu Treinamento - Testes Mobile com Appium e WebdriverIO

Este repositório contém testes automatizados para o aplicativo **Meu Treinamento**, utilizando as ferramentas **Appium**, **WebdriverIO** e **Mocha**.

## Sobre o Aplicativo

O aplicativo **Meu Treinamento** foi desenvolvido como parte do meu Trabalho de Conclusão de Curso (TCC) do curso de Sistemas de Informação na Universidade Paranaense (UNIPAR), entre os anos de 2013 e 2014.

Seu objetivo é auxiliar praticantes de atividades físicas a controlarem sua alimentação e acompanharem sua rotina/evolução de treinos na academia.

## Tecnologias e Dependências

Este projeto utiliza as seguintes tecnologias:

- **Appium** – Ferramenta para automação de testes em aplicativos móveis.
- **WebdriverIO** – Framework de testes baseado em WebDriver.
- **Mocha** – Framework de testes em JavaScript.

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/mychels/app-mtf-tests.git
   cd app-mtf-tests
   ```

2. **Instale as dependências**:

   Para que o projeto funcione, execute o comando abaixo para instalar as dependências necessárias.

   ```bash
   npm install
   ```

---

## Formas de Execução dos Testes

Este projeto permite executar os testes de duas formas:

- ✅ **Execução Local**: usando emulador ou dispositivo físico.
- ☁️ **Execução Remota**: utilizando o BrowserStack.

---

## ✅ Execução Local (Emulador ou Dispositivo Físico)

1. **Conecte um dispositivo físico ou utilize um emulador**:

   Abra o terminal (cmd), e digite o comando abaixo para listar os dispositivos/emuladores disponíveis:

   ```bash
   adb devices
   ```

   Copie o ID do dispositivo ou emulador que deseja utilizar.

2. **Altere a configuração no arquivo `wdio.conf.js`**:

   No arquivo `wdio.conf.js`, substitua a configuração abaixo pelo ID do seu dispositivo/emulador:

   ```javascript
   "appium:udid": "ID DO DISPOSITIVO"
   ```

3. **Execute os testes**:

   Utilize o comando abaixo para iniciar a execução dos testes localmente:

   ```bash
   npx wdio
   ```

---

## ☁️ Execução Remota (BrowserStack)

1. **Configuração do BrowserStack**:

   - Crie uma conta no [BrowserStack](https://www.browserstack.com/).
   - Obtenha suas credenciais: `username` e `access_key`.
   - Importe o apk do app no BrowserStack, e copie o código gerado.

2. **Configure o arquivo .env, usando como base o arquivo .env.example**:

   Configure as seguintes variáveis:

   ```bash
   BROWSERSTACK_USERNAME="seu_username"
   BROWSERSTACK_ACCESS_KEY="sua_access_key"
   BROWSERSTACK_APP="codigo_do_app_importado"
   ```

3. **Execute os testes**:

   Após configurar, execute o comando abaixo:

   ```bash
   npm run test-bs
   ```
