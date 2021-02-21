import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Product } from '@/typings';

const Wrapper = styled.div`
  height: 300px;
  width: 240px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 6px 6px 25px 1px rgba(230, 230, 230, 0.3);
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Name = styled.div`
  margin: 10px auto 30px 10px;
  color: #00124f;
`;

const ImagePlaceholder = styled.div`
  height: 200px;
  width: 100%;
  background-color: lightgray;
`;

type Props = {
  product: Product;
};

const ProductListItem = ({ product }: Props) => (
  <Link to="productdetail" state={product}>
    <Wrapper>
      <Name>{product.name}</Name>
      <ImagePlaceholder />
    </Wrapper>
  </Link>
);

export default ProductListItem;
