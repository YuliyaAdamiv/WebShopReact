import React, {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
import {Products, Navbar} from './components';
function App() {
  const [products, setProducts] = useState([]);
  const fetchProduts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  };
  useEffect(() => {
    fetchProduts();
  }, []);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
}

export default App;
