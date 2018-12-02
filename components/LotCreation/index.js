import React, {Component} from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import css from './LotCreation.scss';
import PropTypes from "prop-types";

class LotCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.form_submit = this.form_submit.bind(this);
  }
  form_submit(e){
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    {/*user_uid we should get from props ~this.props.userID*/}
    var json = JSON.stringify({
      user_uid: 'randomID',
      start_price: e.target.elements[0].value,
      product_name: e.target.elements[1].value,
      product_description: e.target.elements[2].value,
      category_id: e.target.elements[3].value,
    });

    xhr.open("POST", 'http://app.penny-auction.cf/api/lots', true);
    xhr.withCredentials = true;
    xhr.setRequestHeader(`Cookie`, 'keycloak.penny-auction-ui.session=lmfdcWkropehU6axOw7pVhXOQaR0W2_wLgkw1y9r');
    xhr.setRequestHeader('Content-type', 'application/json');
    console.log(e.target);
    xhr.send(json);
  }
  render () {
    return (
        <div className={css.lot_creation_main}>
            <p>Create New Lot</p>
            <form onSubmit={this.form_submit}>
              <input type="number" placeholder="Start Price" />
              <input type="text" placeholder="Product Name" />
              <input type="text" placeholder="Product Description" />
              <input type="number" placeholder="Category ID" />
              <button type="submit">Add new lot</button>
            </form>
        </div>
    );
  }
}

LotCreation.propTypes = {
};

export default withRouter(LotCreation);
