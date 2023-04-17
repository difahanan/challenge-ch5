const express = require('express')
const app = express()
const path = require('path')
const port = 1000

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', function(req, res) {
  res.render('index', { title: 'Home' })
})
app.get('/ejs', function(req, res) {
  res.render('index', { title: 'Home' })
})
app.listen(port, function() {
  console.log(`Server is running on port ${port}`)
})