import React, { Component } from 'react';
import shortId from 'shortid';
import Fetch from '../../Api/Fetch';
import style from './Reviews.module.css';
class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    Fetch.getReviewsDetails(this.props.match.params.movieId)
      .then(reviews => {
        if (reviews.results) {
          this.setState({ reviews: reviews.results });
        }
      })
      .catch(error => console.error(error));
  }
  render() {
    const { reviews } = this.state;

    return (
      <>
        <div>
          {reviews.length !== 0 || reviews.results?.length === 0 ? (
            <ul className={style.reviewsList}>
              {reviews.map(rev => {
                return (
                  <li key={shortId.generate()}>
                    <h2 className={style.reviewsTitle}>{rev.author}</h2>
                    <span>{rev.content}</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <span>No information</span>
          )}
        </div>
      </>
    );
  }
}

export default Reviews;
