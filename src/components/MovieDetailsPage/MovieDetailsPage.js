import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import style from './MoviesDetails.module.css';
import Reviews from '../Reviews/Reviews';
import Fetch from '../Fetch';
import img from '../Cast/actor.png';

class MoviesDetailsPage extends Component {
  state = {
    movie: {},
  };
  componentDidMount() {
    Fetch.movieDetails(this.props.match.params.movieId).then(data =>
      this.setState({ movie: data }),
    );
  }
  render() {
    const {
      original_title,
      poster_path,
      title,
      vote_average,
      overview,
      genres,
    } = this.state.movie;

    return (
      <>
        <button
          onClick={() =>
            this.props.history.push(this.props.location.state.from)
          }
          className="buttonBack"
          type="button"
        >
          back
        </button>
        <div className={style.detailsContainer}>
          <img
            className={style.imgMovies}
            alt={original_title}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : img
            }
            width="300"
          />
          <div>
            <h2>{title}</h2>
            <p>Popularity: {vote_average}</p>
            <h3>Overview</h3>
            <p>{overview} </p>
            <h3>Genres</h3>
            <ul className="genres">
              {genres &&
                genres.map((genre, id) => {
                  return (
                    <li key={id} className="genres-item">
                      {genre.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className={style.detailsNacLinks}>
          <NavLink
            className={style.navLinks}
            activeClassName={style.navLinksActive}
            exact
            to={`${this.props.match.url}/cast`}
          >
            Cast
          </NavLink>
          <NavLink
            className={style.navLinks}
            activeClassName={style.navLinksActive}
            exact
            to={`${this.props.match.url}/reviews`}
          >
            Reviews
          </NavLink>
        </div>

        <Route
          path={`${this.props.match.path}/cast`}
          render={props => <Cast {...props} movie={this.state.movie} />}
        />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MoviesDetailsPage;
