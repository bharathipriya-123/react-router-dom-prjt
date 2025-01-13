
import React from 'react';
import '../style/Product.css';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  
  return (
    <div className="container">
      <div id="grid-container">
        
        
        <div id="sec1" className="grid-item">
          <div className="product-card">
            <img src="https://cdn.pixabay.com/photo/2024/04/06/14/18/ai-generated-8679407_1280.png" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quisquam quod debitis commodi ea velit? Sequi unde numquam </p>
          </div>
        </div>

        <div id="sec2" className="grid-item">
          <div className="product-card">
            <img src="https://cdn.pixabay.com/photo/2017/07/16/22/22/bath-oil-2510783_1280.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quisquam quod debitis commodi ea velit? Sequi unde numquam </p>
          </div>
        </div>

        <div id="sec3" className="grid-item">
          <div className="product-card">
            <img src="https://cdn.pixabay.com/photo/2023/06/30/09/09/ai-generated-8097959_1280.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quisquam quod debitis commodi ea velit? Sequi unde numquam </p>
          </div>
        </div>

        <div id="sec4" className="grid-item">
          <div className="product-card">
            <img src="https://cdn.pixabay.com/photo/2024/05/08/19/56/ai-generated-8749022_1280.jpg" alt="Product 4" />
            <h3>Product 4</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quisquam quod debitis commodi ea velit? Sequi unde numquam </p>
          </div>
        </div>

        <div id="sec5" className="grid-item">
          <div className="product-card">
            <img src="https://www.stockvault.net/data/2017/01/12/220522/preview16.jpg" alt="Product 5" />
            <h3>Product 5</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quisquam quod debitis commodi ea velit? Sequi unde numquam </p>
          </div>
        </div>
        
        <div id="sec6" className="grid-item">
          <div className="product-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2HlaYBSu5Du5tHbV_u7TBpQC6jN2sxCfqUQ&s" alt="Product 6" />
            <h3>Product 6</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quisquam quod debitis commodi ea velit? Sequi unde numquam </p>
          </div>
        </div>
       
      </div>
    </div>
    // <div>
    //   product details
    // </div>
  );
}

