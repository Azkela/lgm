import React, { useState } from "react";
import { faChessRook, faGun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const games = [
    {
      name: "League of Legends",
      icon: faChessRook,
      competitions: ["Competition 1", "Competition 2", "Competition 3"]
    },
    {
      name: "Valorant",
      icon: faGun,
      competitions: ["Competition 4", "Competition 5", "Competition 6"]
    }
  ];

  const [activeGames, setActiveGames] = useState([]);

  const handleButtonClick = (index) => {
    if (activeGames.includes(index)) {
      // Si l'index est déjà dans le tableau, on le retire pour masquer la liste
      setActiveGames(activeGames.filter((gameIndex) => gameIndex !== index));
    } else {
      // Sinon, on ajoute l'index pour afficher la liste
      setActiveGames([...activeGames, index]);
    }
  };

  return (
    <div className="border border-violet-950 flex-1 p-4">
      <h2 className="text-lg font-semibold">Sports et Compétitions</h2>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            <a
              href={"/" + game.name.toLowerCase()}
              onClick={(event) => {
                event.preventDefault();
                handleButtonClick(index);
              }}
            >
              <FontAwesomeIcon icon={game.icon} />
              <span className="ml-1">{game.name}</span>
            </a>
            {activeGames.includes(index) && (
              <ul>
                {game.competitions.map((competition, i) => (
                  <li key={i}>{competition}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;