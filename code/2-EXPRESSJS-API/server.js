const express = require("express")
const bodyParser = require("body-parser")

// Instantiate Express object
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Initiate new data store
const items = [
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
  res.send({
    message: `got root`
  })
})

// Get root API answer
app.get(`/api`, (req, res) => {
  res.send({
    message: `got api`
  })
})

// Get all the items
app.get(`/api/items`, (req, res) => {
  // get all data
  res.send({
    message: `get all items`,
    item: items
  })
})

// Get a single item
app.get(`/api/items/:id`, (req, res) => {
  // get id in integer format
  const itemId = Number(req.params.id)

  // get the matched id in data
  const item = items.filter(item => {
    return item.id === itemId
  })

  res.send({
    message: `get single item`,
    item: item
  })
})

// Save an item
app.post(`/api/items`, (req, res) => {
  if (req.body.id) {
    // do if req.body is with data
    const newItem = req.body
    items.push(newItem)

    res.send({
      message: `saved new item`,
      newItem: newItem
    })
  } else {
    // do if req.body is empty
    res.send({
      message: `request body is empty or without id`
    })
  }
})

// Remove all the items
app.delete(`/api/items`, (req, res) => {
  items.splice(0, items.length)

  res.send({
    message: `deleted all items`,
    items: items
  })
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
