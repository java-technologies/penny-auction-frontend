import React, {Component} from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import css from './LotList.scss';
import PropTypes from "prop-types";
import LotItem from "../LotItem";
import LotItemTest from "../LotItemTest";
import fetch from 'isomorphic-unfetch'

class LotList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render () {
    return (
        <div className={css.items}>
            <div className={css.flex_column}>
              <span>Main items</span>
              <div className={css.flex_row}>
              {
                  this.props.items.map(function(x) {
                      return <LotItem item={x} className={css.item}/>
                  })
              }
              </div>
            </div>
            <div className={css.flex_column}>
              <span>Test items</span>
              <div className={css.flex_row}>
              {
                  this.props.test_items.map(function(x) {
                      return <LotItemTest item={x} className={css.item}/>
                  })
              }
              </div>
            </div>
        </div>
    );
  }
}

LotList.propTypes = {
    items: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default withRouter(LotList);
