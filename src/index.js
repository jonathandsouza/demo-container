const express = require('express');
const app = express();

app.use(require('body-parser').json());
app.use(express.static(__dirname + '/static'));

app.get('/items', (req, res, next) => {
	res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get('/jona', (req, res, next) => {
	res.json(["test"]);
});



app.listen(8080, () => console.log('Listening on port 3000'));


