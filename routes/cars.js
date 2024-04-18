import express from 'express'
import path from 'path'
import fs from 'fs'
import cheerio from 'cheerio'

const __dirname = path.resolve()
const router = express.Router()

let cars = [
	{
		make: '1',
		model: '1',
		year: '1',
		color: '1'
	}
]
let nextId = 1

router.get('/', (req, res) => {
	const carHtmlPath = path.resolve(__dirname, 'views', 'car.html')

	fs.readFile(carHtmlPath, 'utf-8', (err, html) => {
		if (err) {
			console.error(err)
			res.status(500)
			res.send('Server Error')
		}

		const $ = cheerio.load(html)

		if (cars.length === 0) {
			$('.car').html('<p>No cars have been found.</p>') 
		} else {

			const lastCar = cars[cars.length - 1]

			$('.car').html(`
				<h2>Last added car</h2>
				<div>
					<p><span class="bold">Make:</span> ${lastCar.make}</з>
					<p><span class="bold">Model:</span> ${lastCar.model}</p>
					<p><span class="bold">Year:</span> ${lastCar.year}</p>
					<p><span class="bold">Color:</span> ${lastCar.color}</p>
				</div>
			`)
		}

		res.send($.html())
	})
})


router.get('/add', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'views', 'add-car.html'))
})

router.get('/list', (req, res) => {
	const addListHtmlPath = path.resolve(__dirname, 'views', 'cars-list.html')

	fs.readFile(addListHtmlPath, 'utf-8', (err, html) => {
		if (err) {
			console.error(err)
			res.status(500)
			res.send('Server Error')
		}

		const $ = cheerio.load(html)

		if (cars.length === 0) {
			$('.cars').html('<p>No cars have been found.</p>') 
		} else {
			$('.cars').html('<h2>Cars</h2><ul>')

			cars.forEach(car => {
				$('.cars ul').append(`
					<li>
						<p><span class="bold">Make:</span> ${car.make}</p>
						<p><span class="bold">Model:</span> ${car.model}</p>
						<p><span class="bold">Year:</span> ${car.year}</p>
						<p><span class="bold">Color:</span> ${car.color}</p>
					</li>
				`)
			})

			$('.cars').append('</ul>')
		}

		res.send($.html())
		
	})
})


router.post('/add', (req, res) => {
	const { make, model, year, color } = req.body

	const newCar = {
		id: nextId++,
		make,
		model,
		year,
		color
	}

	cars.push(newCar)
	res.redirect('/car')
})

export default router