import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { steamGames } from "../../data/steamGamesData";
import "./Home.css";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGames(steamGames);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <h2>Popular Games</h2>
      <div className="product-list">
        {games.length === 0 ? (
          <p>Loading...</p>
        ) : (
          games.map((game) => <ProductCard key={game.id} item={game} isHome={true} />)
        )}
      </div>
    </div>
  );
}
