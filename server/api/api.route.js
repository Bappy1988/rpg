const server = require('../dev.js');
const uuid = require('uuid');


server.get('/api/time', (req, res) => {
	res.send(JSON.stringify({ok: true, time: new Date().getTime()}));
});

server.post('/api/login', (req, res) => {
	if(req.body.password === "GamesMaster"){
		res.send(JSON.stringify({ok: true, key: uuid()}));
	} else {
		res.send(JSON.stringify({ok: false}));
	}
})
