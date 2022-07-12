const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')

dotEnv.config()
const router = require('./routes')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.get('/', (req, res, next) => {
	res.send('Hello from my Express server v2!')
})

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))
