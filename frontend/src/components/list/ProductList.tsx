import React from 'react';
import styled from 'styled-components';

import { IProduct } from '@/typings';
import ProductListItem from './ProductListItem';

const Wrapper = styled.div`
	flex-grow: 2;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: wrap;
	height: 100%;
	width: 100%;
	margin-top: 20px;
`;

type Props = {
	products: IProduct[] | null;
	searchText: string;
	searchType: 'product' | 'flower';
};

const ProductList = ({ products, searchText, searchType }: Props) => {
	const getFilteredProducts = () => {
		if (!products) {
			return null;
		}

		if (!searchText.length) {
			return products.map((product) => <ProductListItem key={product.id} product={product} />);
		}

		return products
			.filter((product) => {
				switch (searchType) {
					case 'product':
						return product.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
					case 'flower':
						return product.Flowers.find(
							(flower) => flower.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
						);
					default:
						return false;
				}
			})
			.map((product) => <ProductListItem key={product.id} product={product} />);
	};

	return <Wrapper>{getFilteredProducts()}</Wrapper>;
};

export default ProductList;
