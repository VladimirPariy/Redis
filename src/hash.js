import {client} from './index.js';
import {Router} from 'express';

const hashRouter = new Router();

//hash (object)
hashRouter.post('/hashUser', async (req, res) => {
	try {
		const {name, age} = req.body;
		const hset = await client.hSet('usersHash', ['name', name, 'age', age]);
		res.send(hset.toString());
	} catch (error) {
		res.sendStatus(500).send(error.message);
	}
})

hashRouter.get('/hashUserName', async (req, res) => {
	try {
		const hget = await client.hGet('usersHash', 'name');
		res.send(hget);
	} catch (error) {
		res.status(500).send(error);
	}
})

hashRouter.get('/hashUser', async (req, res) => {
	try {
		const hgetAll = await client.hGetAll('usersHash');
		res.send(hgetAll);
	} catch (error) {
		res.status(500).send(error);
	}
})

hashRouter.get('/hashUserVal', async (req, res) => {
	try {
		const hVals = await client.hVals('usersHash');
		res.send(hVals);
	} catch (error) {
		res.status(500).send(error);
	}
})

hashRouter.get('/hashUserKey', async (req, res) => {
	try {
		const hKeys = await client.hKeys('usersHash');
		res.send(hKeys);
	} catch (error) {
		res.status(500).send(error);
	}
})

export {hashRouter}