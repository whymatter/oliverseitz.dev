import { Analytics } from '@vercel/analytics/react';

import '/public/reset.css'
import '/public/style.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}