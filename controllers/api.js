
const hello = (req, res) => {
	res.json({ greeting: 'hello API' });
};

const whoami = (req, res) => {
	let ipaddress;
	let language;
	let software;

	ipaddress = req.get('X-Forwarded-For')
	language = req.get('Accept-Language')
	software = req.get('User-Agent')


	res.json({
		ipaddress,
		language,
		software
	});
};


module.exports ={hello, whoami}