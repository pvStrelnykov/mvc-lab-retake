import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const router = express.Router()

router.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'views', 'home.html'))
})

export default router