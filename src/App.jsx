import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import Navbare from './components/Navbarr';
import Carousel from './components/Carousel';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const handleSearch = (query) => {
    setSearchQuery(query.trim().toLowerCase());
  };

  return (
    <div>
      <Navbare />
      <Carousel />
      <SearchBar onSearch={handleSearch} />
      <ProductList searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default App;
