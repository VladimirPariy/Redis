import {client} from './index.js';
import {Router} from 'express';

const namespacesRouter = new Router();

namespacesRouter.post('/namespace', async (req, res) => {
	try {
		const {key, data} = req.body;
		const set = await client.set(`category1:${key}`, data);
		res.send(set.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

namespacesRouter.post('/namespaceGet', async (req, res) => {
	try {
		const {key} = req.body;
		const get = await client.get(`category1:${key}`);
		res.send(get);
	} catch (error) {
		res.status(500).send(error.message);
	}
})

namespacesRouter.post('/namespace1', async (req, res) => {
	try {
		const {key, data} = req.body;
		const set = await client.set(`category2:${key}`, JSON.stringify(data));
		res.send(set.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

namespacesRouter.post('/namespaceGet1', async (req, res) => {
	try {
		const {key} = req.body;
		const get = await client.get(`category2:${key}`);
		res.send(get);
	} catch (error) {
		res.status(500).send(error.message);
	}
})

export {namespacesRouter}