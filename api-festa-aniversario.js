const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const pessoasConfirmadas = []

/**
 * O Método GET normalmente é utilizado para buscar informações
 * Nesse caso estamos apenas buscando as informações da lista de pessoas confirmadas.
 */
app.get("/pessoasconfirmadas", (request, response) => {
    console.log(request)
    response.json({ nomes: pessoasConfirmadas })
})

/**
 * O Método POST normalmente é utilizado quando é feito alguma alteração
 * Nesse caso estamos fazendo uma alteração na lista de pessoas confirmadas.
 */
app.post("/confirmar", (request, response) => {
    console.log(request)
    pessoasConfirmadas.push(request.body.nome)
    response.json({ nomes: pessoasConfirmadas })
})


app.listen(3030, () => {
    console.log("Esse servidor está rodando em http://localhost:3030")
})