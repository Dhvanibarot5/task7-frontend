import React, { useState } from "react";

const initialBooks = [
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
    img: "https://covers.openlibrary.org/b/id/12547734-L.jpg",
    title: "The Alchemist",
    author: "by Paulo Coelho",
  },
  {
    id: 4,
    img: "https://covers.openlibrary.org/b/id/12547898-L.jpg",
    title: "1984",
    author: "by George Orwell",
  }
];

function BookDisplay() {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookForm, setBookForm] = useState({ id: null, img: "", title: "", author: "" });
  const [isEditing, setIsEditing] = useState(false);

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookForm({ ...bookForm, [name]: value });
  };

  const openModal = (book = { id: null, img: "", title: "", author: "" }) => {
    setBookForm(book);
    setIsEditing(!!book.id);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setBooks((prevBooks) => prevBooks.map((b) => (b.id === bookForm.id ? bookForm : b)));
    } else {
      setBooks((prevBooks) => [...prevBooks, { ...bookForm, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setBookForm({ id: null, img: "", title: "", author: "" });
  };

  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Available Books</h2>

        {/* Add Book Button */}
        <div className="flex justify-center mb-6">
          <button onClick={() => openModal()} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Book
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book.id} className="bg-[#8d99ae] shadow-md rounded-lg p-4 flex flex-col items-center">
                <img src={book.img} alt={book.title} className="w-32 h-48 mb-4 rounded" />
                <h3 className="text-lg font-bold text-white">{book.title}</h3>
                <p className="text-gray-700 font-medium">{book.author}</p>
                <div className="flex mt-4 gap-2">
                  <button onClick={() => openModal(book)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    Update
                  </button>
                  <button onClick={() => deleteBook(book.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No books found matching your search.</p>
          )}
        </div>
      </div>

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">{isEditing ? "Update Book" : "Add Book"}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Image URL</label>
                <input
                  type="text"
                  name="img"
                  value={bookForm.img}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={bookForm.title}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Author</label>
                <input
                  type="text"
                  name="author"
                  value={bookForm.author}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  {isEditing ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default BookDisplay;
