const express = require('express')
const app = express()
const port = 1000

// VIEW ENGINE EJS
app.set('view engine', 'ejs')

const staticData = {
  name: "ADI",
  age: 100,
  occupation: "Web Developer"
};

// middleware
app.use(express.json());

// endpoint JSON dari data statis
app.get('/static-data', (req, res) => {
  res.json(staticData)
})
// MIDDLEWARE
app.use(express.static(__dirname + '/public'))

// UNTUK WCH3
app.get('/ch3', function(request, response){
  response.sendFile(__dirname + '/public/index.html')
})
// UNTUK WCH4
app.get('/ch4', function(request, response){
  response.sendFile(__dirname + '/public/index2.html')
})
// UNTUK ERROR NYA ADA 2 PILIHAN MAU YANG LANGSUNG ATAU PAKAI HTML & CSS
app.get('*', function(request, response){
 response.sendFile(__dirname + '/public/index3.html')
})
//app.get('*', function(req, res, next){
//  res.status(404).json({ status: '404 not found', message: '404 not found'})
//})


//untuk running servernya
app.listen(port, function(){
  console.log(`Server berjalan di port ${port}!`)
})