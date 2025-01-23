import React from 'react';

const Carousel = () => {
  const images = [1, 2, 3]; 

  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((num, index) => (
          <div
            key={num}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={`/Images/image${num}.jpg`}
              className="d-block w-100"
              alt={`Slide ${num}`}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>{`Slide ${num}`}</h1>
              <p>{`Description for Slide ${num}`}</p>
              <a href="#products" className="btn btn-light btn-lg mt-3">
                Explore
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
