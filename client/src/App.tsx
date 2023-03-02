import {useEffect, useState} from 'react';
import './App.css';
import {ProductList} from './components';
import {type Product} from './types';

function App() {
	const [data, setData] = useState<Product[]>();

	useEffect(() => {
		fetch('http://localhost:3000/products')
			.then(async res => res.json())
			.then((data: Product[]) => {
				setData(data);
			})
			.catch((err: unknown) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='grid place-content-center h-screen'>
			{data === undefined ? (
				<h1>loading...</h1>
			) : (
				<ProductList products={data} />
			)}
		</div>
	);
}

export default App;
