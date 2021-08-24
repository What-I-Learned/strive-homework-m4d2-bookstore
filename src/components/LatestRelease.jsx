import { Card } from "react-bootstrap";
import CardDeck from "react-bootstrap/CardDeck";
import { Component } from "react";
import books from "../data/history.json";

import "../App.css";

class LatestReleases extends Component {
  render() {
    return (
      <>
        <CardDeck>
          {books.map((book) => (
            <Card key={book.asin}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Title>{book.price}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small>{book.category}</small>
              </Card.Footer>
            </Card>
          ))}
        </CardDeck>
      </>
    );
  }
}
export default LatestReleases;
