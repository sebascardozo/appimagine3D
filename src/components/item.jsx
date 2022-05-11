import React from 'react';
import ItemCounter from './ItemCounter/ItemCounter'
import '../components/styles/item.css';



const Item = ({ name, image, price, id, stock }) => {
  const onAdd = (qty) => {
    console.log(`Has agregado ${qty} impresoras 🤖`);
  };

  return (
    <article className="product-card">
      <h3 className="product-card__name">{name}</h3>
      <img className="product-card__image" src={image} alt="" />
      <span className="product-card__name">${price}</span>
      <ItemCounter stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
