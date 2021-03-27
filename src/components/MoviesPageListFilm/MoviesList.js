import { Link } from 'react-router-dom';
const MoviesList = ({ movies, location, value }) => {
  return (
    <ul>
      {movies.map(({ id, name, original_title }) => (
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
      ))}
    </ul>
  );
};

export default MoviesList;
