import React from "react";

const books = [
  {
    id: 1,
    img: "https://covers.openlibrary.org/b/id/12726999-L.jpg",
    title: "After You",
    author: "by Jojo Moyes",
  },
  {
    id: 2,
    img: "https://covers.openlibrary.org/b/id/7371823-L.jpg",
    title: "Big Magic",
    author: "by Elizabeth Gilbert",
  },
  {
    id: 3,
    img: "https://covers.openlibrary.org/b/id/8231490-L.jpg",
    title: "A Tale for the Time Being",
    author: "by Ruth Ozeki",
  },
  {
    id: 4,
    img: "https://covers.openlibrary.org/b/id/12547901-L.jpg",
    title: "The Great Gatsby",
    author: "by F. Scott Fitzgerald",
  },
  {
    id: 5,
    img: "https://covers.openlibrary.org/b/id/12547734-L.jpg",
    title: "The Alchemist",
    author: "by Paulo Coelho",
  },
  {
    id: 6,
    img: "https://covers.openlibrary.org/b/id/12547977-L.jpg",
    title: "Dune",
    author: "by Frank Herbert",
  },
  {
    id: 7,
    img: "https://covers.openlibrary.org/b/id/12547896-L.jpg",
    title: "The Hobbit",
    author: "by J.R.R. Tolkien",
  },
  {
    id: 8,
    img: "https://covers.openlibrary.org/b/id/12547898-L.jpg",
    title: "1984",
    author: "by George Orwell",
  },
  {
    id: 9,
    img: "https://covers.openlibrary.org/b/id/12547892-L.jpg",
    title: "Pride and Prejudice",
    author: "by Jane Austen",
  },
  {
    id: 10,
    img: "https://covers.openlibrary.org/b/id/10389354-L.jpg",
    title: "The Silent Patient",
    author: "by Alex Michaelides",
  },
  {
    id: 11,
    img: "https://covers.openlibrary.org/b/id/12547890-L.jpg",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "by Taylor Jenkins Reid",
  },
  {
    id: 12,
    img: "https://covers.openlibrary.org/b/id/10918079-L.jpg",
    title: "Atomic Habits",
    author: "by James Clear",
  },
];

function BookDisplay() {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Available Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-[#8d99ae] shadow-md rounded-lg p-4 flex flex-col items-center">
              <img src={book.img} alt={book.title} className="w-32 h-48 mb-4 rounded" />
              <h3 className="text-lg font-bold text-white">{book.title}</h3>
              <p className="text-gray-700 font-medium">{book.author}</p>
              <button className="mt-4 bg-[#353752] text-white px-4 py-2 rounded hover:bg-[#4b4f7c]">Borrow</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookDisplay;
