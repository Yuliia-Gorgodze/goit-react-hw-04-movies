import React, { Component, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import Fetch from '../../Api/Fetch';

const MoviesList = lazy(() =>
  import(
    '../../components/MoviesPageListFilm/MoviesList' /* webpackChunkName: "MoviesList" */
  ),
);
const Form = lazy(() =>
  import('../../components/FormFilm/FormFilm' /* webpackChunkName: "Form" */),
);
class MoviesPage extends Component {
  state = {
    query: null,
    movie: null,
  };

  componentDidMount() {
    const { pathname, search } = this.props.location;
    console.log(pathname, search);
    if (pathname && search) {
      this.setState({ query: search.slice(7) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = prevState;
    const { query: currentQuery } = this.state;

    if (prevQuery !== currentQuery) {
      this.getSearchFilms(currentQuery);
    }
  }

  getSearchFilms(searchQuery) {
    Fetch.getFilmByValue(searchQuery)
      .then(data => {
        this.setState({ movie: data });
      })
      .catch(error => console.error(error));
  }

  onSubmitForm = currentQuery => {
    const { history, location } = this.props;

    this.setState({ query: currentQuery.toLowerCase() });

    history.push({ ...location, search: `query=${currentQuery.trim()}` });
  };

  render() {
    const { query, movie } = this.state;

    return (
      <div>
        <Suspense fallback={<span>Loading...</span>}>
          <Form onSubmit={this.onSubmitForm} />
          <div>
            {movie && (
              <Route
                to={`/movies/query=${query}`}
                render={props => <MoviesList movies={movie} {...props} />}
              />
            )}
          </div>
        </Suspense>
      </div>
    );
  }
}

export default MoviesPage;
