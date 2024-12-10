import React from 'react';
import GoodsCard from './GoodsCard';

import tShirt from '../images/t-shirt.png';
import jeans from '../images/jeans.png';
import jacket from '../images/jacket.png';
import sweater from '../images/sweater.png';
import shorts from '../images/shorts.png';
import umbrella from '../images/umbrella.png';

function Gallery() {
  const products = [
    { id: 1, image: tShirt, name: 'Футболка X', price: 250 },
    { id: 2, image: jeans, name: 'Джинси Y', price: 550 },
    { id: 3, image: jacket, name: 'Куртка Z', price: 1200 },
    { id: 4, image: sweater, name: 'Светр A', price: 450 },
    { id: 5, image: shorts, name: 'Шорти B', price: 300 },
    { id: 6, image: umbrella, name: 'Парасолька C', price: 150 },
  ];

  return (
    <div style={styles.gallery}>
      {products.map((product) => (
        <GoodsCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

const styles = {
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default Gallery;


