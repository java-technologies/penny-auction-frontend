import React, {Component} from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import css from './LotItem.scss';
import PropTypes from "prop-types";

class LotItemTest extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className={css.item}>
                <div className={css.image}>
                   <img className={css.image} src={this.props.item.img}/>
               </div>
               <div className={css.item_header}>
                   {this.props.item.product.name}
                   <span className={css.price}>
                       {this.props.item.final_price}$
                       <div className={css.start_price}>
                            {this.props.item.start_price}$
                      </div>
                  </span>
               </div>
               <div >
                   <span className={css.tag}>
                   {this.props.item.product.category.name}
                   </span>
               </div>
               <div className={css.description}>
                   {this.props.item.product.description}
               </div>
           </div>
       );
    }
}
LotItemTest.propTypes = {
    item: PropTypes.object.isRequired,
};

export default LotItemTest;
