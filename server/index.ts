import express, {type Express, type Request, type Response} from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Express server');
});

app.listen(3000, () => {
	console.log('[server]: Server is running at http://localhost:3000');
});
