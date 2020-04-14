const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))
app.get('/data.json.gz', (req, res) => {
  res.setHeader('Content-Encoding', 'gzip')
  res.sendFile(`${__dirname}/data.json.gz`)
})

app.listen(port, () => console.log(`coviddata.website server running on port ${port}; Give EVERYONE EVERYWHERE insight into the latest COVID-19 data.`))