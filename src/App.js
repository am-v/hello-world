import BookCard, { Heading } from "./BookCard";
import React, { useState } from "react";

const BooksData = [
  { id: 1, title: "BookName 1", cost: 120.0, qty: 10 },
  { id: 2, title: "BookName 2", cost: 124.0, qty: 13 },
  { id: 3, title: "BookName 3", cost: 160.0, qty: 11 },
  { id: 4, title: "BookName 4", cost: 130.0, qty: 16 },
  { id: 5, title: "BookName 5", cost: 170.0, qty: 40 },
];

const App = () => {
  const title = "Welcome TO Book Store";

  const [data, setData] = useState(BooksData);

  const onAddQty = (id) => {
    const findIndex = data.findIndex((book) => book.id === id);
    data[findIndex].qty = data[findIndex].qty + 1;
    setData([...data]);
  };
  const onRemoveQty = (id) => {
    const findIndex = data.findIndex((book) => book.id === id);
    data[findIndex].qty = data[findIndex].qty - 1;
    setData([...data]);
  };
  return (
    <div className="App">
      <Heading title={title} />

      <div className="container">
        {data.map((book, index) => {
          return (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              cost={book.cost}
              qty={book.qty}
              addQty={onAddQty}
              removeQty={onRemoveQty}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
