import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import routerHome from './routes/home.js'
import routerCars from './routes/cars.js'

const __dirname = path.resolve()
const PORT = 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routerHome)
app.use('/car', routerCars)
app.use((req, res) => {
	res.status(404).send('404 Not Found')
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})