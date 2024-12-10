import React from 'react';

function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card" style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.price}>Ціна: {price} грн</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    width: '200px',
    margin: '16px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  name: {
    fontSize: '20px',
    margin: '8px 0',
    font
  },
  price: {
    color: 'green',
    fontSize: '16px',
  },
};

export default GoodsCard;
