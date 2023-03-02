import {type Product} from '../../types';

const ProductList = ({products}: {products: Product[]}) => {
	console.log(products);
	return (
		<ul>
			{products?.map((product: Product) => (
				<li key={product.id}>{product.title}</li>
			))}
		</ul>
	);
};

export default ProductList;
