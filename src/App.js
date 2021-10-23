import React, { useState } from "react";
import "./styles.css";

var bookDB = {
  JavaScript: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5"
    },
    { name: "JavaScript: The Good Parts", rating: "4/5" }
  ],
  FrontEnd: [
    { name: "Modern Front-end Architecture", rating: "4/5" },
    { name: "CSS Secrets", rating: "4/5" }
  ],
  Java: [
    { name: "Effective Java", rating: "4/5" },
    { name: "Spring in Action", rating: "4/5" }
  ]
};

export default function App() {
  const [books, setBooks] = useState("FrontEnd");
  function handleChange(item) {
    setBooks(item);
  }
  return (
    <div className="App">
      <h1>📚 Book Recommended</h1>
      <small>Checkout some of my recommended books in the given Area</small>
      <div>
        {Object.keys(bookDB).map((item) => {
          return (
            <button
              className="btn"
              onClick={() => handleChange(item)}
              key={item}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {bookDB[books].map((book) => {
            return (
              <li className="list" key={book.name}>
                <div style={{ fontSize: "larger" }}>{book.name}</div>
                <div style={{ fontSize: "smaller" }}>{book.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
