import React from 'react';
import ProductCard from '../Components/ProductCard';

const products = [
  {
    _id: '1',
    name: 'Black Hoodie',
    image: 'https://res.cloudinary.com/dpackji5g/image/upload/v1745492091/WhatsApp_Image_2025-04-24_at_15.47.27_84d115a2_qtlbb8.jpg',
    description: 'Comfortable black hoodie made with premium cotton. Perfect for casual wear.',
    brand: 'SARASSS',
    category: 'Hoodies',
    price: 29.99,
    countInStock: 15,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'White T-Shirt',
    image: 'https://res.cloudinary.com/dpackji5g/image/upload/v1745492091/WhatsApp_Image_2025-04-24_at_15.47.27_84d115a2_qtlbb8.jpg',
    description: 'https://res.cloudinary.com/dpackji5g/image/upload/v1745492091/WhatsApp_Image_2025-04-24_at_15.47.27_84d115a2_qtlbb8.jpg',
    brand: 'SARASSS',
    category: 'T-Shirts',
    price: 19.99,
    countInStock: 30,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Black Joggers',
    image: 'https://res.cloudinary.com/dpackji5g/image/upload/v1745492091/WhatsApp_Image_2025-04-24_at_15.47.27_84d115a2_qtlbb8.jpg',
    description: 'Slim-fit black joggers for everyday comfort and style.',
    brand: 'SARASSS',
    category: 'Bottoms',
    price: 34.99,
    countInStock: 10,
    rating: 4.3,
    numReviews: 5,
  },
  {
    _id: '4',
    name: 'White Sneakers',
    image: 'https://res.cloudinary.com/dpackji5g/image/upload/v1745492091/WhatsApp_Image_2025-04-24_at_15.47.27_84d115a2_qtlbb8.jpg',
    description: 'Classic white sneakers with black sole. Premium build for long walks.',
    brand: 'SARASSS',
    category: 'Footwear',
    price: 59.99,
    countInStock: 20,
    rating: 4.8,
    numReviews: 20,
  },
  {
    _id: '5',
    name: 'Monochrome Cap',
    image: 'https://res.cloudinary.com/dpackji5g/image/upload/v1745492091/WhatsApp_Image_2025-04-24_at_15.47.27_84d115a2_qtlbb8.jpg',
    description: 'Adjustable black & white cap with embroidered logo.',
    brand: 'SARASSS',
    category: 'Accessories',
    price: 14.99,
    countInStock: 40,
    rating: 4.2,
    numReviews: 6,
  },
  {
    _id: '6',
    name: 'Oversized Black Tee',
    image: 'https://res.cloudinary.com/dpackji5g/image/upload/v1745492091/WhatsApp_Image_2025-04-24_at_15.47.27_84d115a2_qtlbb8.jpg',
    description: 'Trendy oversized tee for streetwear lovers.',
    brand: 'SARASSS',
    category: 'T-Shirts',
    price: 24.99,
    countInStock: 25,
    rating: 4.7,
    numReviews: 14,
  }
];

const Home = ({ addToCart }) => {
  return (
    <div className="">
      {/* Bootstrap Carousel */}
      {/* <div id="mainCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner rounded-3">
          <div className="carousel-item active">
            <div className=" mb-4 rounded-3 overflow-hidden">
              <img
              id='carousel'
                src="https://res.cloudinary.com/dpackji5g/image/upload/v1744034816/WhatsApp_Image_2025-04-07_at_18.37.12_3c1040de_svd6uv.jpg"
                className="w-100 h-100 object-fit-cover"
                alt="Black Hoodie"
              />
            </div>

            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>Street Style Redefined</h5>
              <p>Explore our black & white essentials collection.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img id='carousel' src="https://res.cloudinary.com/dpackji5g/image/upload/v1745492091/WhatsApp_Image_2025-04-24_at_15.47.27_84d115a2_qtlbb8.jpg" className="d-block w-100" alt="White T-Shirt" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>Comfort Meets Simplicity</h5>
              <p>Minimal designs for everyday fashion.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img id='carousel' src="https://res.cloudinary.com/dpackji5g/image/upload/v1745492091/WhatsApp_Image_2025-04-24_at_15.47.27_84d115a2_qtlbb8.jpg" className="d-block w-100" alt="White Sneakers" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>Walk in Style</h5>
              <p>Perfect comfort and aesthetic.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div> */}

      <div id="carouselExample" class="carousel slide mt-4">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://res.cloudinary.com/dpackji5g/image/upload/v1744034816/WhatsApp_Image_2025-04-07_at_18.37.12_3c1040de_svd6uv.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dpackji5g/image/upload/v1744034816/WhatsApp_Image_2025-04-07_at_18.37.12_3c1040de_svd6uv.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/dpackji5g/image/upload/v1744034816/WhatsApp_Image_2025-04-07_at_18.37.12_3c1040de_svd6uv.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* Product Section */}
      <h2 className="mb-4 text-center text-white mt-4">Latest Products</h2>
      <div className="row p-4">
        {products.map(product => (
          <ProductCard key={product._id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <footer class="bg-dark text-light pt-5 pb-4">
        <div class="container text-md-left">
          <div class="row text-md-left">

            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">SARASSS</h5>
              <p>Sarasss isn’t just fashion, it’s your statement. Triple S. Triple Impact.</p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
              <p><a href="/" class="text-light text-decoration-none">Home</a></p>
              <p><a href="/shop" class="text-light text-decoration-none">Shop</a></p>
              <p><a href="/cart" class="text-light text-decoration-none">Cart</a></p>
              <p><a href="/account" class="text-light text-decoration-none">My Account</a></p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Support</h5>
              {/* <p><a href="/faq" class="text-light text-decoration-none">FAQ</a></p> */}
              {/* <p><a href="/shipping" class="text-light text-decoration-none">Shipping</a></p> */}
              <p><a href="/returns" class="text-light text-decoration-none">Returns</a></p>
              <p><a href="/contact" class="text-light text-decoration-none">Contact Us</a></p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
              <a href="#" class="text-light me-3"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="text-light me-3"><i class="fab fa-twitter"></i></a>
              <a href="#" class="text-light me-3"><i class="fab fa-instagram"></i></a>
              <a href="#" class="text-light"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <hr class="mb-4" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-8">
              <p class="text-center text-md-start">© 2025 SARASSS. All Rights Reserved.</p>
            </div>
            <div class="col-md-5 col-lg-4">
              <p class="text-center text-md-end">
                <a href="/privacy" class="text-light text-decoration-none me-3">Privacy</a>
                <a href="/terms" class="text-light text-decoration-none">Terms</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
