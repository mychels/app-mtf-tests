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

3. **Conecte um dispositivo físico ao seu computador, ou utilize um emulador**:

   Abra o cmd, e digite o comando abaixo para saber o id do seu dispositivo/emulador.

   ```bash
   adb devices

   ```

4. **Altere o arquivo wdio.conf.js**:

   Acesse o arquivo, e substitua a configuração abaixo, inserindo o id do seu dispositivo/emulador.

   ```bash
   "appium:udid": "ID DO DISPOSITIVO"
   ```

## Executando os Testes

Para rodar os testes do projeto, use o seguinte comando.

```bash
npx wdio
```
