import React from 'react';

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Fiction",
      description: "Explore imaginative stories and narratives",
      image: "https://covers.openlibrary.org/b/id/12547898-L.jpg", 
      books: [
        { title: "1984", author: "George Orwell" },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "Pride and Prejudice", author: "Jane Austen" }
      ]
    },
    {
      id: 2,
      name: "Self-Development",
      description: "Books to help you grow and improve",
      image: "https://covers.openlibrary.org/b/id/10918079-L.jpg", 
      books: [
        { title: "Atomic Habits", author: "James Clear" },
        { title: "Big Magic", author: "Elizabeth Gilbert" },
        { title: "The Alchemist", author: "Paulo Coelho" }
      ]
    },
    {
      id: 3,
      name: "Fantasy",
      description: "Journey into magical and mystical worlds",
      image: "https://covers.openlibrary.org/b/id/12547896-L.jpg", 
      books: [
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
        { title: "Dune", author: "Frank Herbert" },
        { title: "A Tale for the Time Being", author: "Ruth Ozeki" }
      ]
    },
    {
      id: 4,
      name: "Mystery & Thriller",
      description: "Suspenseful and gripping page-turners",
      image: "https://covers.openlibrary.org/b/id/10389354-L.jpg", 
      books: [
        { title: "The Silent Patient", author: "Alex Michaelides" },
        { title: "After You", author: "Jojo Moyes" },
        { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid" }
      ]
    }
  ];

  return (
    <section id="categories-section" className="bg-[#232946] text-white py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Book Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-[#2a325a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-48 h-64 object-cover"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                    <p className="text-[#b8c1ec] mb-4">{category.description}</p>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-[#eebbc3]">Popular in this category:</h3>
                      <ul className="text-sm text-[#b8c1ec]">
                        {category.books.map((book, index) => (
                          <li key={index} className="mb-1">
                            {book.title} - <span className="opacity-75">{book.author}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button 
                    className="mt-4 bg-[#121629] text-white px-4 py-2 rounded hover:bg-[#eebbc3] hover:text-[#232946] transition-colors"
                  >
                    Explore {category.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;