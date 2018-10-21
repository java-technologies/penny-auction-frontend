import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="/static/fonts/fonts.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body style={{margin: '0px', fontFamily: 'Montserrat'}}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
