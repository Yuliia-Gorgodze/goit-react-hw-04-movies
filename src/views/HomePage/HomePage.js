import React, { Component, lazy, Suspense } from 'react';

import Fetch from '../../Api/Fetch';

const MoviesList = lazy(() =>
  import(
    '../../components/HomePageMoviesList/HomePageMoviesList' /*WebpackChunkName: "MoviesList"*/
  ),
);

class HomePage extends Component {
  state = {
    moviesList: [],
  };
  componentDidMount() {
    Fetch.getFilmWeek()
      .then(data => {
        this.setState({ moviesList: data.results });
      })
      .catch(error => console.error(error));
  }
  render() {
    return (
      <Suspense fallback={<span>Loading...</span>}>
        <>
          <MoviesList
            moviesList={this.state?.moviesList}
            location={this.props.location}
          />
        </>
      </Suspense>
    );
  }
}

export default HomePage;
