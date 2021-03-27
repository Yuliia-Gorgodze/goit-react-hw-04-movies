import React, { Component } from 'react';

import Fetch from '../../components/Fetch';
import MoviesList from '../../components/HomePageMoviesList/HomePageMoviesList';
class HomePage extends Component {
  state = {
    moviesList: [],
  };
  componentDidMount() {
    Fetch.getFilmWeek().then(data => {
      if (data.results.length !== 0) {
        this.setState({ moviesList: data.results });
      }
    });
  }
  render() {
    return (
      <>
        <MoviesList
          moviesList={this.state?.moviesList}
          location={this.props.location}
        />
      </>
    );
  }
}

export default HomePage;
