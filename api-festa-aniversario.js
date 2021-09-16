const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * Lista com os HttpStatus que podemos utilizar
 * https://httpstatusdogs.com/
 */
var HttpStatus = {
    BAD_REQUEST : 400,
    OK : 200,
    CREATED : 201
 }

/**
 * Aqui temos uma lista em memória para que possamos manipular
 * Em outros cenários poderia ser um Banco de Dados tipo PostGres
 */
const pessoasConfirmadas = []

/**
 * O Método GET normalmente é utilizado para buscar informações
 * Nesse caso estamos apenas buscando as informações da lista de pessoas confirmadas.
 */
app.get("/pessoasconfirmadas", (request, response) => {
    console.log(request)
    return response.json({ nomes: pessoasConfirmadas })
})

/**
 * O Método POST normalmente é utilizado quando é feito alguma alteração
 * Nesse caso estamos fazendo uma alteração na lista de pessoas confirmadas.
 */
app.post("/confirmar", (request, response) => {
    console.log(request)
    pessoasConfirmadas.push(request.body.nome)
    return response
            .status(HttpStatus.CREATED)
            .json({ nomes: pessoasConfirmadas })
})

/**
 * Nesse método antes de confirmar estamos validando se existe um nome
 */
 app.post("/confirmarvalidando", (request, response) => {
    console.log(request)
    const campoNomeDentroDoBody = request.body.nome;
    if (!campoNomeDentroDoBody) {
        return response
            .status(HttpStatus.BAD_REQUEST)
            .json({ mensagem: "O campo nome não foi preenchido"})
    }
    pessoasConfirmadas.push(request.body.nome)
    return response.json({ nomes: pessoasConfirmadas })
})


/**
 * Aqui estamos iniciando o Express que é framework web server que receberá as conexões/requisições
 */
app.listen(3030, () => {
    console.log("Esse servidor está rodando em http://localhost:3030")
})