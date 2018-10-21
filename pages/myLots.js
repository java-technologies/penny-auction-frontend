import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Template from '../components/Template';
import store from '../components/stores';
import fetch from 'isomorphic-unfetch';

const MyLots = ({ path, lots }) => {
  const content = store(path);
  return (
    <Template pathname={path} pageTitle="My Lots">
      <p>My Lots Page</p>
      <div className={css.lots_flexbox}>
        {/*
          lots.map(({lots}) => (
            <div key={lots.id} className={css.lot}>
              <div className={css.link}>
                <Link as={`/p/${lots.id}`} href={`/post?id=${lots.id}`}>
                  <span>{lots.name}</span>
                </Link>
              </div>
              <div className={css.main_block}>
                <img src=`${lots.img}` alt='lot' />
                <div className={css.info_block}>
                  <div className={css.title}>
                    <span>{lots.name}</span>
                    <span>{lots.price}</span>
                  </div>
                  <p>{lots.description}</p>
                </div>
              </div>
            </div>
          ))
        */}
      </div>
    </Template>
  );
};
MyLots.getInitialProps = async function({ pathname }){
  {/*
    const res = await fetch('server link');
    const data = await res.json();
    return { path: pathname, lots: data };
  */}
  return { path: pathname };
};

MyLots.propTypes = {
  path: PropTypes.string.isRequired,
};

export default withRouter(MyLots);
