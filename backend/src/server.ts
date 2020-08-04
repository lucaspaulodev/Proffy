import express from 'express'

const app = express()

app.use(express.json())

app.get('/users', (request, response) => {
    return response.json({
        name: "Lucas",
        age: 21,
    })
})

app.listen(3333)