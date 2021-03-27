import React, { Component } from 'react';

import style from '../../views/MoviesPage/MoviesPage.module.css';

class Form extends Component {
  state = {
    value: '',
  };

  handelChange = e => {
    const { value } = e.target;
    this.setState({ value: value });
  };

  handelSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;

    if (value.trim() === '') {
      return;
    }

    onSubmit(value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <form className={style.form} onSubmit={this.handelSubmit}>
        <label>
          <input
            onChange={this.handelChange}
            name="movie"
            placeholder="Что ищем? "
            value={this.state.value}
          ></input>
        </label>
      </form>
    );
  }
}

export default Form;
