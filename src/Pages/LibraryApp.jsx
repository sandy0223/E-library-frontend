import React, { useState } from "react";
import Novel from "./Novel";
import MyLibrary from "./MyLibrary";

const LibraryApp = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const handleFavoriteUpdate = (updatedFavorites) => {
    setFavoriteBooks(updatedFavorites);
  };

  return (
    <div>
      <Novel onFavorite={handleFavoriteUpdate} />
      <MyLibrary favoriteBooks={favoriteBooks} />
    </div>
  );
};

export default LibraryApp;
