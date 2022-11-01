import {client} from './index.js';
import {Router} from 'express';

const listRouter = new Router();

//list(array)

listRouter.post('/usersList', async (req, res) => {
	try {
		const [...args] = req.body;
		const rPush = await client.rPush('usersList', args);
		res.send(rPush.toString());
	} catch (e) {
		res.status(500).send(e);
	}
})

listRouter.delete('/usersList', async (req, res) => {
	try {
		const rpop = await client.rPop('usersList');
		res.send(rpop.toString());
	} catch (e) {
		res.status(500).send(e);
	}
})

listRouter.get('/usersListLength', async (req, res) => {
	try {
		const llen = await client.lLen('usersList');
		res.send(llen.toString());
	} catch (e) {
		res.status(500).send(e);
	}
})

listRouter.get('/usersList', async (req, res) => {
	try {
		const lRange = await client.lRange('usersList', 0, -1);
		res.send(lRange);
	} catch (e) {
		res.status(500).send(e);
	}
})

export {listRouter}