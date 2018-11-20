import React, {Component} from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import css from './LotList.scss';
import PropTypes from "prop-types";
import LotItem from "../LotItem";

class LotList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
                <div className={css.items}>
                    {/*<LotItem className={css.item}/>*/}
                    {/*<LotItem className={css.item}/>*/}
                    {/*<LotItem className={css.item}/>*/}
                    {/*<LotItem className={css.item}/>*/}
                    {/*<LotItem className={css.item}/>*/}
                    {
                        this.props.items.map(function(x) {
                            return <LotItem item={x} className={css.item}/>
                        })
                    }
                </div>
        );
    }
}
LotList.propTypes = {
    items: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default LotList;