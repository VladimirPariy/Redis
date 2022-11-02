import {client} from './index.js';
import {Router} from 'express';

const removeRouter = new Router();

//remove string
removeRouter.delete('/delKey', async (req, res) => {
	try {
		const {key} = req.body;
		const del = await client.del(key);
		res.send(del.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

removeRouter.delete('/delKey1', async (req, res) => {
	try {
		const {key1, key2} = req.body;
		const del = await client.del([key1, key2]);
		res.send(del.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

//remove field from hash

removeRouter.delete('/delFieldsHash', async (req, res) => {
	try {
		const {key1, key2} = req.body;
		const del = await client.hDel('userHash', [key1, key2]);
		res.send(del.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

removeRouter.delete('/delFieldHash', async (req, res) => {
	try {
		const {key1} = req.body;
		const del = await client.hDel('userHash', key1);
		res.send(del.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

removeRouter.delete('/delHash', async (req, res) => {
	try {
		const del = await client.del('userHash');
		res.send(del.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

//remove set

removeRouter.delete('/delSetField', async (req, res) => {
	try {
		const {value} = req.body;
		const del = await client.sRem('usersSets', value);
		res.send(del.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

removeRouter.delete('/delSetFields', async (req, res) => {
	try {
		const {value1, value2} = req.body;
		const del = await client.sRem('usersSets', [value1, value2]);
		res.send(del.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})


removeRouter.delete('/delSet', async (req, res) => {
	try {
		const del = await client.del('usersSets');
		res.send(del.toString());
	} catch (error) {
		res.status(500).send(error.message);
	}
})

export {removeRouter}