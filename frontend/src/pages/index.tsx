import React, { useEffect, useState } from 'react';
import { PageProps } from 'gatsby';
import axios from 'axios';

import { IProduct } from '@/typings';
import Title from '@/components/_shared/Title';
import Layout from '@/components/_shared/Layout';
import SearchForm from '@/components/_shared/SearchForm';
import ProductList from '@/components/list/ProductList';

const ProductListPage: React.FC<PageProps> = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    axios.get('http://localhost:8080/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Layout>
      <Title title="Products" />
      <SearchForm
        onChange={setSearchText}
        value={searchText}
        placeholder="Search"
      />
      <ProductList products={products} searchText={searchText} />
    </Layout>
  );
};

export default ProductListPage;
