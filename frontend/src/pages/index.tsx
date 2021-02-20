import React from 'react';
import { PageProps } from 'gatsby';

import Title from '@/components/_shared/Title';
import Layout from '@/components/_shared/Layout';

const ProductList: React.FC<PageProps> = () => (
  <Layout>
    <Title title="Products" />
  </Layout>
);

export default ProductList;
