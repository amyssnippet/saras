import React from 'react';
import { PlusCircle } from 'react-bootstrap-icons';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={product.image} style={{ height:'40vh' }} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            {product.name}
            <PlusCircle
              role="button"
              size={20}
              onClick={() => addToCart(product)}
              className="text-dark"
            />
          </h5>
          <p className="card-text">{product.description.slice(0, 60)}...</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <span>${product.price}</span>
          <a href={`/product/${product._id}`} className="btn btn-outline-dark btn-sm">View</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
