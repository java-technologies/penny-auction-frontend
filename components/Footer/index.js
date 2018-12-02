import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import css from './footer.scss';

const Footer = () => (
  <footer className={css.footer}>
    <div>
      <ul>
        <li>
          Tel:
        </li>
        <li>
          Email:
        </li>
      </ul>
    </div>
    <div>
    <ul>
      <li>
        <Link href='/privacy_policy'>Privacy Policy</Link>
      </li>
      <li>
        <Link href='/terms_and_conditions'>Terms & Conditions</Link>
      </li>
    </ul>
    </div>
  </footer>
);


export default withRouter(Footer);
