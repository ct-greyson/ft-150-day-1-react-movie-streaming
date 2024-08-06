import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";
import { useMovieData } from "../hooks/useMovieData";

const MovieData = () => {
  const { movieData } = useMovieData();

  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185/${movieData.poster_path}`} />
        <Card.Body>
          <Card.Title>{movieData.original_title}</Card.Title>
          <Card.Text>
            {movieData.overview}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Runtime: {movieData.runtime} minutes</ListGroup.Item>
          <ListGroup.Item>Release Date {movieData.release_date}</ListGroup.Item>
          <ListGroup.Item>Popularity: {movieData.popularity}</ListGroup.Item>
        </ListGroup>
        <Card.Link className="btn btn-outline-danger">Add to Watchlist</Card.Link>
      </Card>
    </Container>
  );
};

export default MovieData;
