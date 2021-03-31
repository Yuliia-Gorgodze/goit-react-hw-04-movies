import { Link } from 'react-router-dom';
const MoviesList = ({ movies, location, value }) => {
  return (
    <ul>
      {movies.length !== 0 ? (
        movies.map(({ id, name, original_title }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                  value: value,
                },
              }}
            >
              {name || original_title}
            </Link>
          </li>
        ))
      ) : (
        <span>Нет фильмов !!!</span>
      )}
    </ul>
  );
};

export default MoviesList;
