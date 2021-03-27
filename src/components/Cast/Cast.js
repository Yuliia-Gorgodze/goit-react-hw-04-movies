import React, { Component } from 'react';
import shortId from 'shortid';
import style from './Cast.module.css';
import Fetch from '../Fetch';
import img from './actor.png';
class Cast extends Component {
  state = {
    actor: [],
  };
  componentDidMount() {
    Fetch.getMovieList(this.props.match.params.movieId).then(actors => {
      this.setState({ actor: actors });
    });
  }
  render() {
    const { actor } = this.state;

    return (
      <>
        <div>
          <ul className={style.castListActors}>
            {actor?.map(({ name, character, profile_path }) => {
              return (
                <li className={style.actorsCard} key={shortId.generate()}>
                  <img
                    alt={name}
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : img
                    }
                    width="110"
                    height="150"
                  />
                  <h4>{name}</h4>
                  <p>{character}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default Cast;
