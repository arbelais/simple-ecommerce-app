import express, {type Express, type Request, type Response} from 'express';
import cors from 'cors';

export const app: Express = express();

app.get('/', (_req: Request, res: Response) => {
	res.send('This is an endpoint that gives you nothing but pain and sadness');
});

app.get('/products', cors(), async (_req: Request, res: Response) => {
	const data = await fetch('https://fakestoreapi.com/products');

	const products: unknown = await data.json();

	if (products === undefined) {
		res.status(404).json({err: 'Hubo un error'});
		return;
	}

	res.status(200).json(products);
});
