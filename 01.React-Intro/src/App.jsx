import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Movies from "./components/Movies";
import ThemeBox from "./components/ThemeBox";
import "./App.css"; // CSS import

import React, { useState } from "react";

function App() {
  const movies = [
    {
      id: "tt0111161",
      title: "The Shawshank Redemption",
      year: "1994",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: "9.2",
      isTopRated: true,
    },
    {
      id: "tt0068646",
      title: "The Godfather",
      year: "1972",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
      imDbRating: "9.2",
      isTopRated: true,
    },
    {
      id: "tt0468569",
      title: "The Dark Knight",
      year: "2008",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: "9.0",
      isTopRated: true,
    },
    {
      id: "tt0109830",
      title: "Forrest Gump",
      year: "1994",
      image:
        "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: "8.8",
      isTopRated: true,
    },
    {
      id: "tt1375666",
      title: "Inception",
      year: "2010",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: "8.7",
      isTopRated: false,
    },
    {
      id: "tt0167260",
      title: "The Lord of the Rings: The Return of the King",
      year: "2003",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: "8.9",
      isTopRated: true,
    },
    {
      id: "tt0167261",
      title: "The Lord of the Rings: The Two Towers",
      year: "2002",
      image:
        "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: "8.7",
      isTopRated: false,
    },
    {
      id: "tt6751668",
      title: "Parasite",
      year: "2019",
      image:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
      imDbRating: "8.5",
      isTopRated: false,
    },
  ];

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <Main />
      <Contact />
      <Footer />
      <Welcome user="Ali" />
      <Welcome user="Aysel" />
      <Welcome user="Murad" />
      <Welcome user="Nigar" />

      <Movies movies={movies} />

      <hr />


   <ThemeBox />

   <hr />
    </div>
  );
}

export default App;
