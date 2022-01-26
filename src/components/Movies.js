import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MovieDisplay from "./MovieDisplay";
// import { selectMovies } from "../features/movie/movieSlice";
import {
  selectRecommend,
  selectNewDisney,
  selectOriginal,
  selectTrending,
} from "../features/movie/movieSlice";

const Movies = () => {
  // const movies = useSelector(selectMovies);
  const recommend = useSelector(selectRecommend);
  const newDisney = useSelector(selectNewDisney);
  const original = useSelector(selectOriginal);
  const trending = useSelector(selectTrending);

  return (
    <Container>
      <MovieDisplay title={"Recommended"} movieArr={recommend} />
      <MovieDisplay title={"New to Disney+"} movieArr={newDisney} />
      <MovieDisplay title={"Originals"} movieArr={original} />
      <MovieDisplay title={"Trending"} movieArr={trending} />
      {/* <MovieDisplay
        title={"Recommended"}
        movieArr={
          movies && movies.filter((movie) => movie.type === "recommend")
        }
      />
      <MovieDisplay
        title={"New to Disney+"}
        movieArr={movies && movies.filter((movie) => movie.type === "new")}
      />
      <MovieDisplay
        title={"Originals"}
        movieArr={movies && movies.filter((movie) => movie.type === "original")}
      />
      <MovieDisplay
        title={"Trending"}
        movieArr={movies && movies.filter((movie) => movie.type === "trending")}
      /> */}
    </Container>
  );
};

export default Movies;

const Container = styled.div``;
