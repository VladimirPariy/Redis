import express from 'express';
import redis from 'redis';

import {stringRouter} from "./string.js";
import {hashRouter} from "./hash.js";
import {listRouter} from "./list.js";
import {setsRouter} from "./sets.js";


export const client = redis.createClient();

const port = 3000;
const host = 'localhost';

const app = express();

app.use(express.json());

app.use('/api', stringRouter);
app.use('/api', hashRouter);
app.use('/api', listRouter);
app.use('/api', setsRouter);

(async function ()  {
	try{
		await client.connect();
		app.listen(port, ()=> {
			console.log(`Server started on host: http://${host}:${port}`);
		})
	} catch (error) {
		console.log(error);
	}
})()