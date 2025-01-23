import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = () => {
    const query = document.getElementById('search-input').value;
    onSearch(query); 
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="input-group">
            <input
              id="search-input"
              type="text"
              className="form-control"
              placeholder="Search for products..."
            />
            <button onClick={handleSearch} className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
