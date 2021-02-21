import React from 'react';
import { PageProps } from 'gatsby';

import Title from '@/components/_shared/Title';
import Layout from '@/components/_shared/Layout';
import { Product } from '@/typings';

const ProductDetailPage: React.FC<PageProps> = ({ location }) => {
  const product = location.state as Product;

  return (
    <Layout>
      <Title title={product.name} />
    </Layout>
  );
};

export default ProductDetailPage;
