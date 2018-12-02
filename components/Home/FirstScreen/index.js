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
        <div className={css.hero}>
            <div className={css.heroimg}>
                {/*<img src="https://images.unsplash.com/photo-1511344506912-a2a2d4916354?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92498ef1b05f6d75d1b6463d70151ff7&auto=format&fit=crop&w=1500&q=80" alt="Pixel Skincare"/>*/}
            </div>
            <div className={css.herotext}>
                <h1>Auctions<br/> Made simple</h1>
            <a href="/auction" className={css.btn}>Explore</a>
        </div>
  </div>
    );
  }
}
FirstScreen.propTypes = {
  content: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default FirstScreen;