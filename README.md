# Rodando a aplicação

## 1 - Instalando as dependencias do projeto

```bash
git clone https://github.com/ldiasrs/ensinando-endpoints-nodejs.git
cd ensinando-endpoints-nodejs
npm install
```

## 2 - Iniciando a aplicação

```bash
npm start
```

## 3 - Mandando requisições para a aplicação
- Você pode usar o https://www.postman.com/

*Confirmar sem Validação*
```bash
URL: http://localhost:3030/confirmar
METODO: POST
BODY: {"nome":"<NOME PESSOA>"}
```

*Confirmar validando se o nome da pessoa esta preenchido*
```bash
URL: http://localhost:3030/confirmarvalidando
METODO: POST
BODY: {"nome":}
```

*Buscar pessoas confirmadas*
```bash
URL: http://localhost:3030/pessoasconfirmadas
METODO: GET
BODY: NAO SE USA BODY
```



