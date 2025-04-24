import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar px-4" style={{ background:'#212428' }}>
       <img src='https://res.cloudinary.com/dfkkdv8et/image/upload/v1745499765/WhatsApp_Image_2025-04-24_at_18.02.22_cd6599dc-removebg-preview_rvhbuw.png' width={100}/>
      <div>
        <Link to="/cart" className="btn btn-outline-light me-2">
          Cart ({cartCount})
        </Link>
        <Link to="/signup" className="btn btn-outline-light">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


     