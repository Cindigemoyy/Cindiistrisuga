import React from "react";
import "./App.css";

const books = [
  {
    id: 1,
    title: "Menguasai Pemrograman Berorientasi Objek",
    author: "Ade Rahmat Muktadir",
    publisher: "Informatika 2018",
    image: "/image/objek1.jpg",
    popular: true,
  },
  {
    id: 2,
    title: "Dasar Pemrograman Python 3",
    author: "Abdul Kadir",
    publisher: "Andi Publisher 2018",
    image: "/image/objek3.jpg",
    popular: true,
  },
  {
    id: 3,
    title: "Sistem Basis Data Dan SQL",
    author: "Didik Setiyadi",
    publisher: "Media Komputindo 2018",
    image: "/image/objek4.jpg",
    popular: true,
  },
  {
    id: 4,
    title: "Dasar-Dasar Pemrograman dengan .NET",
    author: "Ade Rahmat Muktadir",
    publisher: "Informatika 2018",
    image: "/image/objek2.jpg",
    popular: false,
  },
  {
    id: 5,
    title: "Metodologi Pengembangan Sistem Informasi",
    author: "Sandy Bersu",
    publisher: "Samudra 2018",
    image: "/image/objek8.jpg",
    popular: false,
  },
];

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>{book.publisher}</p>
    </div>
  );
}

function App() {
  const popularBooks = books.filter((b) => b.popular);
  const allBooks = books;

  return (
    <div className="container">
      <h2>Popular</h2>
      <div className="books-grid">
        {popularBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <h2>Our Books</h2>
      <div className="books-grid">
        {allBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
