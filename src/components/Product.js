import React from 'react';
import styled from 'styled-components';

function Product() {
  return (
    <ProductContainer>
      <ProductInfo>
        <p>iPhone case</p>
        <p className='product__price'>
          <small>$</small>
          <strong>24.43</strong>
        </p>
        <div className='product__rating'>
          <p>⭐</p>
        </div>
      </ProductInfo>
    </ProductContainer>
  );
}

export default Product;

const ProductContainer = styled.div``;

const ProductInfo = styled.div``;
