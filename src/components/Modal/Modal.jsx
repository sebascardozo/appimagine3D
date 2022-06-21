import React from "react";

export const Modal = (id, buyerInfo) => {
  return (
    <div>
      <h2>Confirmación de orden</h2>
      <p>{buyerInfo.name}</p>
      <p>{id}</p>
    </div>
  );
};