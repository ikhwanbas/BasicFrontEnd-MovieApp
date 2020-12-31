import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieItem from './components/MovieItem';

function App() {
  return (
    <div className="App">

      <Navbar />
      <MovieList />

    </div>
  );
}

export default App;
