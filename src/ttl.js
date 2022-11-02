import {client} from './index.js';
import {Router} from 'express';


const ttlRouter = new Router();


ttlRouter.post('/ttl', async (req, res) => {
	try {
		const {key, time} = req.body;
		const setEx = await client.setEx('userttl', time, key);
		res.send(setEx.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

ttlRouter.get('/ttlTimeLeft', async (req, res) => {
	try {
		const ttl = await client.ttl('userttl');
		res.send(ttl.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

ttlRouter.post('/ttlExpire', async (req, res) => {
	try {
		const {time} = req.body;
		const ttl = await client.expire('userttl', time);
		res.send(ttl.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

ttlRouter.get('/ttlPersist', async (req, res) => {
	try {
		const ttl = await client.persist('userttl');
		res.send(ttl.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

export {ttlRouter}