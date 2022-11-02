import {client} from './index.js';
import {Router} from 'express';

const stringRouter = new Router();

//string
stringRouter.post('/userString', async (req, res) => {
	try {
		const {name} = req.body;
		const set = await client.set('userString', name);
		res.send(set.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

stringRouter.get('/userString', async (req, res) => {
	try {
		const get = await client.get('userString');
		res.send(get);
	} catch (error) {
		res.status(500).send(error);
	}
})

stringRouter.post('/userStringEX', async (req, res) => {
	try {
		const {key} = req.body
		const exists = await client.exists(key);
		res.send(exists.toString());
	} catch (error) {
		res.status(500).send(error);
	}
})

stringRouter.put('/userString', async (req, res) => {
	try {
		const {key} = req.body;
		const getSet = await client.getSet('userString', key);
		res.send(getSet.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

stringRouter.post('/userStringAppend', async (req, res) => {
	try {
		const {key} = req.body;
		const append = await client.append('userString', key);
		res.send(append.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

export {stringRouter}

