import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    // Fixed missing document components as advised in https://github.com/vercel/next.js/blob/master/errors/missing-document-component.md
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
