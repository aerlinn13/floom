import React, { useState } from 'react';
import { PageProps } from 'gatsby';

import Title from '@/components/_shared/Title';
import Layout from '@/components/_shared/Layout';
import SearchForm from '@/components/_shared/SearchForm';

const ProductList: React.FC<PageProps> = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <Layout>
      <Title title="Products" />
      <SearchForm
        onChange={setSearchText}
        value={searchText}
        placeholder="Search"
      />
    </Layout>
  );
};

export default ProductList;
