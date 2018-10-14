import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import css from './footer.scss';

const Footer = () => (
  <footer className={css.footer}>
    <span>Footer</span>
  </footer>
);


export default withRouter(Footer);
