export const renderPage = (data) => {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Car</title>
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
				<pre>${data}</pre>
			</main>
		</body>
		</html>
	`
}