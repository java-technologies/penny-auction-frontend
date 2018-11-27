import React, {Component} from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import css from './LotList.scss';
import PropTypes from "prop-types";
import LotItem from "../LotItem";
import fetch from 'isomorphic-unfetch'

class LotList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render () {
    console.log(this.props.data);
    return (
      <div>
        <h1>Batman TV Shows</h1>
        <ul>
          {this.props.data.map((data) => (
            <li key={data.show.id}>
              <Link as={`/p/${data.show.id}`} href={`/post?id=${data.show.id}`}>
                <a>{data.show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

LotList.propTypes = {
    items: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default withRouter(LotList);
