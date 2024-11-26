import React from "react";

function MyAccount() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "January 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  };

  const borrowedBooks = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      dueDate: "2024-02-15",
      img: "https://covers.openlibrary.org/b/id/12547734-L.jpg",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      dueDate: "2024-02-20",
      img: "https://covers.openlibrary.org/b/id/12547898-L.jpg",
    },
  ];

  const readBooks = [
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      completedDate: "2024-01-10",
      img: "https://covers.openlibrary.org/b/id/10918079-L.jpg",
    },
    {
      id: 4,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      completedDate: "2024-01-15",
      img: "https://covers.openlibrary.org/b/id/12547896-L.jpg",
    },
  ];

  return (
    <section className="bg-[#232946] text-white py-12 min-h-screen">
      <div className="container mx-auto px-4">
        {/* User Profile Section */}
        <div className="bg-[#2a325a] rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex items-center gap-6">
            <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full bg-[#121629]" />
            <div>
              <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
              <p className="text-[#b8c1ec]">{user.email}</p>
              <p className="text-sm text-[#b8c1ec]">Member since: {user.memberSince}</p>
            </div>
          </div>
        </div>

        {/* Currently Borrowed Books */}
        <div className="bg-[#2a325a] rounded-lg p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Currently Borrowed Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {borrowedBooks.map((book) => (
              <div key={book.id} className="flex gap-4 bg-[#121629] p-4 rounded-lg">
                <img src={book.img} alt={book.title} className="w-24 h-36 object-cover rounded" />
                <div>
                  <h3 className="font-semibold mb-1">{book.title}</h3>
                  <p className="text-sm text-[#b8c1ec] mb-2">{book.author}</p>
                  <p className="text-sm text-[#eebbc3]">Due: {new Date(book.dueDate).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reading History */}
        <div className="bg-[#2a325a] rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Reading History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readBooks.map((book) => (
              <div key={book.id} className="flex gap-4 bg-[#121629] p-4 rounded-lg">
                <img src={book.img} alt={book.title} className="w-24 h-36 object-cover rounded" />
                <div>
                  <h3 className="font-semibold mb-1">{book.title}</h3>
                  <p className="text-sm text-[#b8c1ec] mb-2">{book.author}</p>
                  <p className="text-sm text-[#b8c1ec]">Completed: {new Date(book.completedDate).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
