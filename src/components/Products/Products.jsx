import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import shoes from '../../assets/shoes.jpeg';
import macbook from '../../assets/macbook.jpeg';
const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running Shoes.',
    price: '$5',
    image: shoes,
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook.',
    price: '$10',
    image: macbook,
  },
];
const Products = () => {
  return (
    <div>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Products;
