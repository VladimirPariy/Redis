import express from 'express';
import redis from 'redis';

import {namespacesRouter} from "./namespaces.js";
import {stringRouter} from "./string.js";
import {hashRouter} from "./hash.js";
import {listRouter} from "./list.js";
import {setsRouter} from "./sets.js";
import {ttlRouter} from "./ttl.js";


export const client = redis.createClient();

const port = 3000;
const host = 'localhost';

const app = express();

app.use(express.json());

app.use('/api', namespacesRouter);
app.use('/api', stringRouter);
app.use('/api', hashRouter);
app.use('/api', listRouter);
app.use('/api', setsRouter);
app.use('/api', ttlRouter);

(async function () {
	try {
		await client.connect();
		app.listen(port, () => {
			console.log(`Server started on host: http://${host}:${port}`);
		})
	} catch (error) {
		console.log(error);
		throw new Error(error.message)
	}
})()