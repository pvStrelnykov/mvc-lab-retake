import { renderPage as renderPageHome } from '../views/home.js'
import { renderPage as renderPageAddCar } from '../views/add-car.js'
import { renderPage as renderPageCar } from '../views/car.js'
import querystring from 'querystring'
import fs from 'fs'

export const handleHome = (res) => {
	res.setHeader('Content-Type', 'text/html')
	res.write(renderPageHome())
	res.end()
}

export const handleAddCar = (method, req, res) => {
	if (method === 'GET') {
		res.setHeader('Content-Type', 'text/html')
		res.write(renderPageAddCar())
		res.end()
	} else if (method === 'POST') {
		let body = ''
		req.on('data', chunk => {
			body += chunk.toString()
		})
		req.on('end', () => {
			const formData = querystring.parse(body)
			fs.writeFile('./formData.json', JSON.stringify(formData), (e) => {
					if (e) {
							console.error(e)
							res.writeHead(500)
							res.end()
					}
					res.writeHead(302, { 'Location': '/car' })
					res.end()
			})
		})
	}
}

export const handleCar = (res) => {
	fs.readFile('./formData.json', (err, data) => {
		if (err) {
				console.error(err)
				res.writeHead(500)
				res.end()
		} else {
				res.writeHead(200, { 'Content-Type': 'text/html' })
				res.write(renderPageCar(data))
				res.end()
		}
	})
}

export const handlePageNotFound = (res) => {
	res.setHeader('Content-Type', 'text/html')
	res.write('404 Page Not Found')
	res.end()
}
