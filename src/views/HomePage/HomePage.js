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
        if (data.results.length !== 0) {
          this.setState({ moviesList: data.results });
        }
      })
      .catch(console.error('eror'));
  }
  render() {
    return (
      <Suspense>
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
