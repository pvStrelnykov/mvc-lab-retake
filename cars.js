const cars = [
	{
		id: 1,
		make: 'Toyota',
		model: 'Yaris',
		year: 2001,
		color: 'white'
	}
]

export const getCars = () => cars

export const getCarInformation = (id) => {
	const car = cars.find(car => car.id == id)

	if (car) {
		return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}.`
	} else {
		return 'Car doesn\'t exist'
	}
}

export const getCarAge = (id) => {
	const car = cars.find(car => car.id == id)

	if (car) {
		const now = new Date().getFullYear()
		const CAR_AGE = now - car.year
		
		return `Car is ${CAR_AGE} years old.` 
	} else {
		return 'Car doesn\'t exist'
	}
}