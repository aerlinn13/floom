import React from 'react';
import { PageProps } from 'gatsby';

import Title from '@/components/_shared/Title';
import Layout from '@/components/_shared/Layout';

const ProductDetail: React.FC<PageProps> = () => (
  <Layout>
    <Title title="Product Detail" />
  </Layout>
);

export default ProductDetail;
