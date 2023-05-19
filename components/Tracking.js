import Script from 'next/script'
import React from 'react'

function Tracking() {
  return (
    <>
    <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11110494127"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11110494127');
          `}
        </Script>
    </>
  )
}

export default Tracking