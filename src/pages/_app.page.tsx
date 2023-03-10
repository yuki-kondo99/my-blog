import type { AppProps } from 'next/app';
import 'the-new-css-reset/css/reset.css';
import '@styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
