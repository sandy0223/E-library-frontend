import React from "react";
import { Link } from "react-router-dom";


const magazinesData = {
  latest: [
    { id: 1, title: "Tech Today", img: "tech-today.jpg", price: "$10" },
    { id: 2, title: "Science World", img: "science-world.jpg", price: "$12" },
    // Add more magazine data here
  ],
  upcoming: [
    { id: 1, title: "Future Innovations", img: "future-innovations.jpg", releaseDate: "2024-11-15" },
    { id: 2, title: "Global Trends", img: "global-trends.jpg", releaseDate: "2024-12-05" },
    // Add more magazine data here
  ],
  anime: [
    { id: 1, title: "Anime Art", img: "anime-art.jpg", price: "$15" },
    { id: 2, title: "Manga Universe", img: "manga-universe.jpg", price: "$18" },
    // Add more magazine data here
  ],
};

const Magazines = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Magazines</h1>

      {/* Latest Magazines Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Magazines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {magazinesData.latest.map((magazine) => (
            <div key={magazine.id} className="bg-white p-4 shadow-md rounded-lg">
              <img src={magazine.img} alt={magazine.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-medium">{magazine.title}</h3>
              <p className="text-lg font-semibold text-blue-500">{magazine.price}</p>
              <div className="mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2">View</button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg"><Link to="/borrow">Borrow</Link></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Magazines Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Magazines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {magazinesData.upcoming.map((magazine) => (
            <div key={magazine.id} className="bg-white p-4 shadow-md rounded-lg">
              <img src={magazine.img} alt={magazine.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-medium">{magazine.title}</h3>
              <p className="text-lg text-gray-600">Release Date: {magazine.releaseDate}</p>
              <div className="mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Anime Magazines Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Anime Magazines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {magazinesData.anime.map((magazine) => (
            <div key={magazine.id} className="bg-white p-4 shadow-md rounded-lg">
              <img src={magazine.img} alt={magazine.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-medium">{magazine.title}</h3>
              <p className="text-lg font-semibold text-blue-500">{magazine.price}</p>
              <div className="mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2">View</button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg"><Link to="/borrow">Borrow</Link></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Magazines;
