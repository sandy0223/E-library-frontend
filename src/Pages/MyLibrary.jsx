import React, { useEffect, useState } from "react";

const MyLibrary = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteNovels")) || [];
    setFavoriteBooks(storedFavorites);
  }, []);

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">My Library</h1>
      {favoriteBooks.length === 0 ? (
        <p className="text-gray-700 text-center">No favorite books added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteBooks.map((book) => (
            <div key={book.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-1">by {book.author}</p>
              <p className="text-gray-700 mb-4">{book.description}</p>
              <p className="text-gray-900 font-bold mb-4">{book.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLibrary;
