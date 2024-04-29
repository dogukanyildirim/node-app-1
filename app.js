const express = require('express');
const path = require('path');
const app = express();

const baseURL = 'https://rickandmortyapi.com/api';

app.set('view engine', 'ejs');

app.use('/', (req, res) => {
	const data = callApi();
	res.render('index', { list: data.results });
});

async function callApi() {
	try {
		const response = await fetch(`${baseURL}/character`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
}

app.listen(3000, () => {
	console.log('nodejs basladi...: port 3000');
});