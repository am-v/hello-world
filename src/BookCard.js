import React from "react";

export const BookCard = ({ id, title, cost, qty, addQty, removeQty }) => {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="price">Rs. {cost}</div>
      <div className="quantity">Qty {qty} </div>
      <button onClick={() => addQty(id)}>Add Qty</button>
      <button onClick={() => removeQty(id)}>Remove Qty</button>
    </div>
  );
};

export default BookCard;

export const Heading = ({ title, ...rest }) => (
  <div className="title blue red">{title}</div>
);
