const express = require('express')
const app = express()

app.use(express.json())

const now = new Date()

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info' , (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length} people</p><p>${now}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const person = persons.find(person => person.id === request.params.id)
  if (person) {
    response.json(person)
  }

  else {
    return response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const personExists = persons.find(person => person.id === id)
  if (personExists) {
    persons = persons.filter(person => person.id !== id)
    return response.status(204).end()
  }
  else {
    return response.status(404).end()
  }
})

app.post('/api/persons', (request, response) => {
  const id = Math.round(Math.random() * 100000)

  const person = request.body
  person.id = id

  persons.push(person)
  response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})