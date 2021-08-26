import { Component } from "react";
import { Alert, ListGroup, Spinner } from "react-bootstrap";
import SingleComment from "./SingleComment";

class BookComments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1ZTJkNTI2MjAwMTViNmRjOWQiLCJpYXQiOjE2Mjk5ODUyMzksImV4cCI6MTYzMTE5NDgzOX0.mS3Qwvrlsn7oJIK8hVVuKRbXkVR6kVchtAJ7C4UySkI",
          },
        }
      );
      if (response.ok) {
        let commentsData = await response.json();
        this.setState({
          comments: commentsData,
          isLoading: false,
        });
        console.log(this.state.commentsData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="text-center">
        <h2>Comments</h2>
        {this.state.isLoading && (
          <Spinner animation="border" variant="success" className="mx-auto" />
        )}
        {this.state.comments.length == 0 && !this.state.isLoading ? (
          <div>No comments</div>
        ) : (
          <ListGroup>
            {this.state.comments.map((comment) => (
              <SingleComment singleComment={comment} />
            ))}
          </ListGroup>
        )}
      </div>
    );
  }
}

export default BookComments;
