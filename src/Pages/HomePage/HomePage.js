import React from "react";
import HomeCarousel from "./Carousel/Carousel";
import Header from "../../Components/header/Header";
import MovieList from "./MoviesList/MovieList";
import MovieTabs from "./MovieTabs/MovieTabs";
import Footer from "Components/footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      
      <HomeCarousel />
      <MovieList />

      <MovieTabs />
      <Footer/>
    </div>
  );
}
