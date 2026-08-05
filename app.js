const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// Ruta de health check simple
app.get('/health', (req, res) => {
  res.status(200).send('OK')
})

app.listen(PORT, () => {
  process.stdout.write(`server started on port ${PORT}\n`)
})