import React, {Component} from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import css from './LotItem.scss';
import PropTypes from "prop-types";

class LotItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className={css.item}>
                <div className={css.image}>
                </div>
                <div className={css.itemheader}>
                    Lot Item name
                    <span className={css.price}> 200$ </span>
                </div>
                <div className={css.itemdesc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque cum debitis dignissimos enim fuga minus nobis, nulla quibusdam quis, recusandae rerum saepe suscipit voluptas voluptatum. Dolorum modi necessitatibus non.
                </div>
            </div>
        );
    }
}
LotItem.propTypes = {
    content: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default LotItem;
