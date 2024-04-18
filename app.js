import http from 'http'
import { getCars, getCarInformation, getCarAge } from './cars.js'
import { getHTMLDocumentStart, getHTMLDocumentEnd } from './htmlGenerator.js'
const PORT = 3000

function requestListener(req, res) {
	const cars = getCars()
	console.log(cars)

	res.setHeader('Content-Type', 'text/html')
	res.write(getHTMLDocumentStart())
	res.write('<body>')
	res.write(`<p>${getCarInformation(2)}</p>`)
	res.write(`<p>${getCarAge(2)}</p>`)
	res.write('</body>')
	res.write(getHTMLDocumentEnd())
	res.end()
}

const app = http.createServer(requestListener)

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}.`)
})