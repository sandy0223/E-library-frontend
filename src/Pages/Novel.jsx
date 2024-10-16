import React, { useEffect, useState } from "react";

const novelsData = [
  {
    id: 1,
    title: "Mystery of the Lost Island",
    author: "John Doe",
    image: "/images/mystery-novel.jpg",
    link: "$20",
    description: "An intriguing mystery about an island that holds many secrets.",
  },
  {
    id: 2,
    title: "The Last Adventure",
    author: "Jane Smith",
    image: "/images/adventure-novel.jpg",
    link: "$18",
    description: "A thrilling tale of exploration and the spirit of adventure.",
  },
  {
    id: 3,
    title: "Chronicles of the Forgotten Realm",
    author: "Maxwell King",
    image: "/images/fantasy-novel.jpg",
    link: "$22",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
  {
    id: 3,
    title: "Chronicles of the Forgotten Realm",
    author: "Maxwell King",
    image: "/images/fantasy-novel.jpg",
    link: "$22",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
  {
    id: 3,
    title: "Chronicles of the Forgotten Realm",
    author: "Maxwell King",
    image: "/images/fantasy-novel.jpg",
    link: "$22",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
  {
    id: 3,
    title: "Chronicles of the Forgotten Realm",
    author: "Maxwell King",
    image: "/images/fantasy-novel.jpg",
    link: "$22",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
  {
    id: 3,
    title: "Chronicles of the Forgotten Realm",
    author: "Maxwell King",
    image: "/images/fantasy-novel.jpg",
    link: "$22",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
  {
    id: 3,
    title: "Chronicles of the Forgotten Realm",
    author: "Maxwell King",
    image: "/images/fantasy-novel.jpg",
    link: "$22",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
  {
    id: 3,
    title: "Chronicles of the Forgotten Realm",
    author: "Maxwell King",
    image: "/images/fantasy-novel.jpg",
    link: "$22",
    description: "A fantasy epic filled with magic, heroism, and dark forces.",
  },
];

const Novel = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteNovels")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleFavorite = (novel) => {
    const isFavorite = favorites.some((fav) => fav.id === novel.id);
    let updatedFavorites;

    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = favorites.filter((fav) => fav.id !== novel.id);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, novel];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteNovels", JSON.stringify(updatedFavorites)); // Update localStorage
  };

  return (
    <div className="p-8 bg-gradient-to-r from-purple-500 to-blue-500">
      {/* <h1 className="text-4xl font-bold mb-8 text-center">Novels Collection</h1> */}
      <div className="grid grid-cols-1 mt-28 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {novelsData.map((novel) => (
          <div key={novel.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={novel.image}
              alt={novel.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{novel.title}</h3>
           
            
            <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
              <a href={novel.link}>Download / View</a>
            </button>
            <button
              className="mt-4 ml-4 px-4 py-2 bg-green-600 text-white rounded-lg"
              onClick={() => handleFavorite(novel)}
            >
              {favorites.some((fav) => fav.id === novel.id)
                ? "Unmark as Favorite"
                : "Mark as Favorite"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novel;
