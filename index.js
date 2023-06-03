const express = require('express');
const PORT = process.env.PORT || 8081
const app = express();
const todoController = require('./controller/todo.controller')
const blogController = require('./controller/blog.controller')


app.use(express.json())
app.use(todoController)
app.use(blogController)

app.get('/', (req, res) => {
  return res.send(200)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})