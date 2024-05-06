import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductListing';
import axios from 'axios';
import AnalyseButton from './AnalyseButton';
import 'tailwindcss/tailwind.css';
function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productResponse = await axios.get('https://fakestoreapi.com/products');
      const categoryResponse = await axios.get('https://fakestoreapi.com/products/categories');

      setProducts(productResponse.data);
      setCategories(categoryResponse.data);
      setFilteredProducts(productResponse.data); 
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (searchTerm) => {
    const filteredList = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredList);
  };

  const handleCategoryChange = (category) => {
    const filteredList = category === 'All'
      ? products
      : products.filter((product) => product.category === category);
    setFilteredProducts(filteredList);
  };

  return (
    <div className="App">
      <Header categories={categories} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ProductList products={filteredProducts} />
      <AnalyseButton />
    </div>
  );
}

export default App;