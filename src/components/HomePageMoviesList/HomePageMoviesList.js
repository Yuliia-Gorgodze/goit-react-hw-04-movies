import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import style from '../../views/HomePage/HomePage.module.css';
const MoviesList = ({ moviesList, location }) => {
  return (
    <ul>
      {moviesList &&
        moviesList.map(({ id, name, original_title }) => (
          <li key={id}>
            <Link
              className={style.navLinks}
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
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

MoviesList.propTypes = {
  moviesList: propTypes.array.isRequired,
  location: propTypes.object.isRequired,
};
