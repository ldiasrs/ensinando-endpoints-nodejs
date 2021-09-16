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

## 4 - Exercicio proposto

1) Edite a ação /pessoasconfirmadas para que ela retorne explicidamente o status HttpStatus.OK

2) Edite a ação /confirmarvalidando e coloque uma validação a mais que verifica se a pessoa já esta confirmada na lista, caso esteja retorne uma mensagem "Pessoa já confirmada" com status: 208 (Already Reported = Já enviado)

3) Crie uma nova ação chamada /removerconfirmacao que recebe um body:  ```{"nome":"<NOME PESSOA>"``` com o método: DELETE. Essa ação deve remover a pessoa da lista caso exista e retornar a lista de pessoas confirmadas. Caso não exista deve retonar uma mensagem com o body body:  ```{"mensagem":"Pessoa não encontrada"``` e com status: NOT_FOUND=404

4) Crie uma nova ação chamada /removerconfirmacao que recebe um body:  ```{"nome":"<NOME PESSOA>"``` com o método: DELETE. Essa ação deve remover a pessoa da lista caso exista e retornar a lista de pessoas confirmadas



