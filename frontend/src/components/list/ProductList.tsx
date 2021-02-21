import React from 'react';
import styled from 'styled-components';

import { Product } from '@/typings';
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
  products: Product[] | null;
  searchText: string;
};

const ProductList = ({ products, searchText }: Props) => {
  const getFilteredProducts = () => {
    if (!products) {
      return null;
    }

    if (!searchText.length) {
      return products.map((product) => <ProductListItem product={product} />);
    }

    return products
      .filter(
        (product) =>
          product.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
      )
      .map((product) => <ProductListItem product={product} />);
  };

  return <Wrapper>{getFilteredProducts()}</Wrapper>;
};

export default ProductList;
