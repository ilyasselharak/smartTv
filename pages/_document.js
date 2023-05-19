import { Html, Head, Main, NextScript } from 'next/document'
import { Helmet } from 'react-helmet'

export default function Document() {
  return (
    <Html lang="en" style={{scrollBehavior: 'smooth'}}>
      <Head >
      <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11110494127"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)} gtag('js', new Date()); gtag('config', 'AW-11110494127'); </script>
      </Helmet>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
