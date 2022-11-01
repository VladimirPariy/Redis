import {client} from './index.js';
import {Router} from 'express';

const setsRouter = new Router();

//sets(array)

setsRouter.post('/usersSets', async (req, res) => {
	try {
		const [...args] = req.body;
		const sAdd = await client.sAdd('usersSets', args);
		res.send(sAdd.toString());
	} catch (e) {
		res.status(500).send(e);
	}
})

setsRouter.get('/usersSets', async (req, res) => {
	try {
		const sMembers = await client.sMembers('usersSets');
		res.send(sMembers);
	} catch (e) {
		res.status(500).send(e);
	}
})

setsRouter.get('/usersSetsCol', async (req, res) => {
	try {
		const sCard = await client.sCard('usersSets');
		res.send(sCard.toString());
	} catch (e) {
		res.status(500).send(e);
	}
})




export {setsRouter}