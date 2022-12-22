const hello = (req, res) => res.json({ greeting: 'hello API' });

const whoami = (req, res) => {

	const ipaddress = req.get('X-Forwarded-For')
	const language = req.get('Accept-Language')
	const software = req.get('User-Agent')


	res.json({
		ipaddress,
		language,
		software
	});
};


module.exports ={hello, whoami}