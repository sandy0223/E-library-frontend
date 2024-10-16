import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const magazinesData = {
  latest: [
    { id: 1, title: "Tech Today", img: "https://media.zinnov.com/wp-content/uploads/2024/01/technology-trends-2024-report-infographic-v3-653x1024.png", link: "https://futuretodayinstitute.com/wp-content/uploads/2024/03/TR2024_Full-Report_FINAL_LINKED.pdf" },
    { id: 2, title: "AI modern approach third edition", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiD49JidfWX11QJdELxShtictRIyGr37OSgA&s", link: "https://people.engr.tamu.edu/guni/csce421/files/AI_Russell_Norvig.pdf" },
    { id: 2, title: "Science World", img: "science-world.jpg", link: "$12" },
    { id: 2, title: "Science World", img: "science-world.jpg", link: "$12" },
    { id: 2, title: "Science World", img: "science-world.jpg", link: "$12" },
    { id: 2, title: "Science World", img: "science-world.jpg", link: "$12" },
  ],
  upcoming: [
    { id: 3, title: "Future Innovations", img: "future-innovations.jpg", releaseDate: "2024-11-15" },
    { id: 4, title: "Global Trends", img: "global-trends.jpg", releaseDate: "2024-12-05" },
    { id: 4, title: "Global Trends", img: "global-trends.jpg", releaseDate: "2024-12-05" },
    { id: 4, title: "Global Trends", img: "global-trends.jpg", releaseDate: "2024-12-05" },
    { id: 4, title: "Global Trends", img: "global-trends.jpg", releaseDate: "2024-12-05" },
    { id: 4, title: "Global Trends", img: "global-trends.jpg", releaseDate: "2024-12-05" },
  ],
  anime: [
    { id: 5, title: "Anime Art", img: "anime-art.jpg", link: "$15" },
    { id: 6, title: "Manga Universe", img: "manga-universe.jpg", link: "$18" },
    { id: 6, title: "Manga Universe", img: "manga-universe.jpg", link: "$18" },
    { id: 6, title: "Manga Universe", img: "manga-universe.jpg", link: "$18" },
    { id: 6, title: "Manga Universe", img: "manga-universe.jpg", link: "$18" },
    { id: 6, title: "Manga Universe", img: "manga-universe.jpg", link: "$18" },
  ],
};

const Magazines = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteMagazines")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleFavorite = (magazine) => {
    const isFavorite = favorites.some((fav) => fav.id === magazine.id);
    let updatedFavorites;

    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = favorites.filter((fav) => fav.id !== magazine.id);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, magazine];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteMagazines", JSON.stringify(updatedFavorites));
  };

  const renderMagazines = (magazines) => {
    return magazines.map((magazine) => (
      <div key={magazine.id} className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-center">
        <img src={magazine.img} alt={magazine.title} className="w-1/2 h-[40%] object-contain rounded-lg mb-4" />
        </div>
        <h3 className="text-xl font-medium">{magazine.title}</h3>

        <div className="mt-4 flex gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            <a href={magazine.link}>Download</a>
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            <Link to="/borrow">Borrow</Link>
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() => handleFavorite(magazine)}
          >
            {favorites.some((fav) => fav.id === magazine.id)
              ? "Unmark as Favorite"
              : "Mark as Favorite"}
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-8 bg-gradient-to-r from-purple-500 to-blue-500">
      <h1 className="text-3xl font-bold mb-6 text-center">Magazines</h1>

      {/* Latest Magazines Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Magazines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderMagazines(magazinesData.latest)}
        </div>
      </section>

      {/* Upcoming Magazines Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Magazines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderMagazines(magazinesData.upcoming)}
        </div>
      </section>

      {/* Anime Magazines Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Anime Magazines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderMagazines(magazinesData.anime)}
        </div>
      </section>
    </div>
  );
};

export default Magazines;
