
const express = require('express')
const app = express()
const port = 8094

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/redirect', (req, res) => {
  res.redirect('http://localhost/tabs/tab2');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
