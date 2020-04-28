const express = require('express')
const app = express()
const port = 3000
const UNCOMPRESSED_DATA_SIZE = 14862603
const UNCOMPRESSED_PLOTLY_SIZE = 3325432

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))
app.get('/favicon.ico', (req, res) => res.sendFile(`${__dirname}/favicon.ico`))
app.get('/data.json.gz', (req, res) => {
  res.setHeader('Content-Encoding', 'gzip')
  res.setHeader('Transfer-Encoding', 'gzip')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('File-Size', UNCOMPRESSED_DATA_SIZE) // Non-standard header; Used for calculating download progress bar on the front-end.
  res.sendFile(`${__dirname}/data.json.gz`)
})
app.get('/plotly-1.53.0.min.js.gz', (req, res) => { // Freezing plotly version so the dependency doesn't change underfoot and this app can control the headers
  res.setHeader('Content-Encoding', 'gzip')
  res.setHeader('Transfer-Encoding', 'gzip')
  res.setHeader('Content-Type', 'application/javascript')
  res.setHeader('File-Size', UNCOMPRESSED_PLOTLY_SIZE) // Non-standard header; Used for calculating download progress bar on the front-end.
  res.sendFile(`${__dirname}/plotly-1.53.0.min.js.gz`)
})

app.listen(port, () => console.log(`coviddata.website server running on port ${port}; Give EVERYONE EVERYWHERE insight into the latest COVID-19 data.`))