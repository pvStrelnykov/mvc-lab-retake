import http from 'http'
import { handleHome, handleAddCar, handleCar, handlePageNotFound } from './routes/index.js'

const PORT = 3000

function listeningListener(req, res){
	const { url, method } = req

	if (url === '/' && method === 'GET') {
		handleHome(res)
	} else if ( url === '/add-car' ) {
		handleAddCar(req.method, req, res)
	} else if (url === '/car' && method === 'GET') {
		handleCar(res)
	} else {
		handlePageNotFound(res)
	}
}

const app = http.createServer(listeningListener)

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}.`);
})
