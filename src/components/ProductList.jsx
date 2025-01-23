import React, { useEffect, useState } from 'react';

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery) ||
    product.description.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="container my-5">
      {loading && <p>Loading...</p>}
      {!loading && filteredProducts.length === 0 && <p>No results found</p>}
      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{product.title}</h5>
                <p className="card-text text-truncate">${product.price.toFixed(2)}</p>
                <p className="card-text text-truncate">{product.description}</p>
                <div className="mt-auto">
                  <button className="btn btn-primary btn-sm w-100 mb-2">
                    View Product
                  </button>
                  <button className="btn btn-success btn-sm w-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
