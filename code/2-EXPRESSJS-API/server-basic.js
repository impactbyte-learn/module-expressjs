const express = require("express")
const app = express()

// Initiate new data store
const data = [
  {
    id: 0,
    name: "Money",
    color: "various"
  },
  {
    id: 1,
    name: "Laptop",
    color: "black"
  },
  {
    id: 2,
    name: "Mouse",
    color: "white"
  },
  {
    id: 3,
    name: "Cable",
    color: "gray"
  }
]

// Get root answer
app.get(`/`, (req, res) => {
  res.send(`got root`)
})

// Get root API answer
app.get(`/api`, (req, res) => {
  res.send(`got api`)
})

// Get all the items
app.get(`/api/items`, (req, res) => {
  res.send(data)
})

// Get a single item
app.get(`/api/items/:id`, (req, res) => {
  res.send(`got item with id: ${req.params.id}`)
})

// Save an item
app.post(`/api/items`, (req, res) => {
  res.send(`saved new item`)
})

// Remove all the items
app.delete(`/api/items`, (req, res) => {
  res.send(`deleted all items`)
})

// Remove an item
app.delete(`/api/items/:id`, (req, res) => {
  res.send(`deleted one item`)
})

// Update an item with new info
app.put(`/api/items/:id`, (req, res) => {
  res.send(`updated one item`)
})

// Run the app server
app.listen(3000, () => console.log(`Server is listening on localhost:3000`))
