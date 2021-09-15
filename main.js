const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (request, response) => {
    response.json({ message: "ola mundo" })
})

app.get("/usuario", (request, response) => {
    response.json({ users: ["joao", "maria", "jose"] })
})

app.get("/pokemon", (request, response) => {
    response.json({ message: "charmander", query: request.query })
})

app.get("/pokemon/:id", (request, response) => {
    const id = request.params.id
    const pokemons = ["pikachu", "charmander", "squirtle"]

    response.json({ message: pokemons[id], query: request.query })
})

app.post("/pokemon", (request, response) => {
    const body = request.body // receber atraves do request.body
    console.log(body)
    response.json({
        user: {
            name: body.name,
            email: body.email,
            password: body.password
        }
    })
})

app.listen(3030, () => {
    console.log("Esse servidor está rodando em http://localhost:3030")
})