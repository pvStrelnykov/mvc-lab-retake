export const renderPage = (data) => {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Add car</title>
		</head>
		<body>
			<header>
				<nav>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/add-car">Add car</a>
					</li>
					<li>
						<a href="/car">Last added car</a>
					</li>
				</nav>
			</header>
			<main>
				<form action="/add-car" method='post'>
					<input type="text" name='make' placeholder='Make'>
					<input type="text" name='model' placeholder='Model'>
					<input type="number" name='year' placeholder='Year'>
					<input type="text" name='color' placeholder='Color'>
					<button>Add car</button>
				</form>
			</main>
		</body>
		</html>
	`
}