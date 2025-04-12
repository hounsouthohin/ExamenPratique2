//page pour afficher la liste des films avec la liste des films definie dans un tableau
// avec la propriete deleted dans chaque film

import React from "react";
import ListMovie from "./Composants/ListMovie";

export default function Home() {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      poster_path:
        "https://image.tmdb.org/t/p/w500/tmU7geKVybMWFQMYWUfN1YQaYd2.jpg",
      duration: "2h 22m",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      deleted: false,
    },
    {
      id: 2,
      title: "The Godfather",
      poster_path:
        "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolX1tVrjBB.jpg",
      duration: "2h 55m",
      description:    
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      deleted: false,            
    },            
    {
      id: 3,
      title: "The Dark Knight",
      poster_path:
        "https://image.tmdb.org/t/p/w500/qJ2tWmrZIM9s2XZxX1O3fT6v9VJ.jpg",        
      duration: "2h 32m",
      description:            
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his greatest challenges as a young vigilante known as the Batman.",
      deleted: false,            
    }
  ];

  return (
    <div>
      <ListMovie movies={movies} />
    </div>
  );
}