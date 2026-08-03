const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  process.stdout.write(`server started on port ${PORT}\n`)
})