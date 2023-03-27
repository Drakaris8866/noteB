const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

const index = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

index.use(cors())
index.use(jsonServer.bodyParser)
index.use(middlewares)
index.use(router)

const PORT = 8000

index.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`)
})