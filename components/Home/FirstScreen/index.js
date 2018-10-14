import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FirstScreen.scss';

class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className={css.first_screen}>
        <h2>header from template with links is above the main block</h2>
        <h1>First Screen</h1>
        <p id="uniqueId1">{this.props.content.title[0]}</p>
        <p id="uniqueId2">{this.props.content.title[1]}</p>
        <h2>footer from template with some info is under the main block</h2>
      </div>
    );
  }
}
FirstScreen.propTypes = {
  content: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default FirstScreen;
