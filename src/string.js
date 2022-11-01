import {Router} from 'express';

import {client} from './index.js';


let controller = new Router();

//string
controller.post('/userString', async (req, res) => {
	try {
		const {name} = req.body;
		const set = await client.set('userString', name);
		console.log(set);
		res.send(set.toString());
	} catch (error) {
		console.log(error);
		res.sendStatus(500).send(error.message);
	}
})


controller.get('/userString', async (req, res) => {
	try {
		const get = await client.get('userString');
		res.send(get);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
})

controller.post('/userStringEX', async (req, res) => {
	try {
		const {key} = req.body
		const exists = await client.exists(key);
		res.send(exists.toString());
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
})

controller.put('/userString', async (req, res) => {
	try {
		const {key} = req.body;
		const getSet = await client.getSet('userString', key);
		console.log(getSet);
		res.send(getSet.toString());
	} catch (error) {
		console.log(error);
		res.sendStatus(500).send(error.message);
	}
})

controller.post('/userStringAppend', async (req, res) => {
	try {
		const {key} = req.body;
		const append = await client.append('userString', key);
		console.log(append);
		res.send(append.toString());
	} catch (error) {
		console.log(error);
		res.sendStatus(500).send(error.message);
	}
})

//hash (object)
controller.post('/hashUser', async (req, res) => {
	try {
		const {name, age} = req.body;
		const hset = await client.hSet('usersHash', ['name', name, 'age', age]);
		console.log(hset);
		res.send(hset + '');
	} catch (error) {
		console.log(error);
		res.sendStatus(500).send(error.message);
	}
})

controller.get('/hashUserName', async (req, res) => {
	try {
		const hget = await client.hGet('usersHash', 'name');
		res.send(hget);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
})

controller.get('/hashUser', async (req, res) => {
	try {
		const hgetAll = await client.hGetAll('usersHash');
		res.send(hgetAll);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
})

controller.get('/hashUserVal', async (req, res) => {
	try {
		const hVals = await client.hVals('usersHash');
		res.send(hVals);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
})

controller.get('/hashUserKey', async (req, res) => {
	try {
		const hKeys = await client.hKeys('usersHash');
		res.send(hKeys);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
})

//list(array)

controller.post('/usersList', async (req, res) => {
	try {
		const [...args] = req.body;
		const rset = await client.rPush('usersList', args);
		console.log(args, rset);
		res.send(rset.toString());
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}
})

controller.delete('/usersList', async (req, res) => {
	try {
		const {count} = req.body;
		const rpop = await client.rPop('usersList');
		console.log(count, rpop);
		res.send(rpop.toString());
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}
})

controller.get('/usersListLength', async (req, res) => {
	try {
		const llen = await client.lLen('usersList');
		console.log(llen);
		res.send(llen.toString());
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}
})

controller.get('/usersList', async (req, res) => {
	try {
		const lRange = await client.lRange('usersList', 0, -1);
		console.log(lRange);
		res.send(lRange);
	} catch (e) {
		console.log(e);
		res.status(500).send(e);
	}
})


export {controller}