import React from 'react';
import { PageProps } from 'gatsby';

import { IProduct } from '@/typings';
import Title from '@/components/_shared/Title';
import Layout from '@/components/_shared/Layout';
import FlowerList from '@/components/details/FlowerList';

const ProductDetailPage: React.FC<PageProps> = ({ location }) => {
  const product = location.state as IProduct;

  return (
    <Layout>
      <Title title={product.name} />
      <FlowerList flowers={product.Flowers} />
    </Layout>
  );
};

export default ProductDetailPage;
