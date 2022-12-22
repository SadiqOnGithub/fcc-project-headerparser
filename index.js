require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { errorHandler } = require('./middleware/errorHandler');

//config
const app = express();
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// middleware
app.use(express.static('public'));

// routes
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));
app.use('/api', require('./routers/api'))

// err
app.use(errorHandler)

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, () => {
	console.log('Your app is listening on port ' + listener.address().port);
});
