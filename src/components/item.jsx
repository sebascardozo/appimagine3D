import React from 'react';
import ItemCounter from './ItemCounter/ItemCounter'




const Item = ({ name, image, price, id, stock }) => {
  const onAdd = (qty) => {
    console.log(`Has agregado ${qty} impresoras 🤖`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={image} alt="" />

      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">${price}</span>

      <ItemCounter stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
