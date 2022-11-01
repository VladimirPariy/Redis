import express, {Express} from 'express';
import {router} from './router'
import redis from 'redis';


export const client = redis.createClient();

const port: number = 3000;

const host: string = 'localhost';

const app: Express = express();


app.use(express.json());

app.use('/api', router);

(async function (): Promise<void> {
	try {
		await client.connect();
		app.listen(port, (): void => {
			console.log(`Server started on host: http://${host}:${port}`);
		})
	} catch (error) {
		console.log(error);
	}
})()