import React, { useEffect, useState } from 'react';
import { PageProps, Link } from 'gatsby';
import axios from 'axios';

import Title from '@/components/_shared/Title';
import Layout from '@/components/_shared/Layout';
import SearchForm from '@/components/_shared/SearchForm';
import { Product } from '@/typings';

const ProductList: React.FC<PageProps> = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    axios.get('http://localhost:8080/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const renderListItem = (product: Product) => (
    <Link to="productdetail" state={product}>
      {product.name}
    </Link>
  );

  const renderList = () => {
    if (!products) {
      return null;
    }

    if (!searchText.length) {
      return products.map(renderListItem);
    }

    return products
      .filter(
        (product) =>
          product.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
      )
      .map(renderListItem);
  };

  return (
    <Layout>
      <Title title="Products" />
      <SearchForm
        onChange={setSearchText}
        value={searchText}
        placeholder="Search"
      />
      {renderList()}
    </Layout>
  );
};

export default ProductList;
