/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
import '../styles/utilities.css';
import '../styles/homepage.css';
import '../styles/detail.css';
import '../styles/checkout.css';
import '../styles/complete-checkout.css';
import '../styles/sign-up.css';
import '../styles/sign-up-success.css';
import '../styles/sign-up-photo.css';
import '../styles/sign-in.css';
import '../styles/404-not-found.css';
import '../styles/overview.css';
import '../styles/sidebar.css';
import '../styles/transactions.css';
import '../styles/transactions-detail.css';
import '../styles/edit-profile.css';
import '../styles/navbar-log-in.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    
        {/* BootStrap JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous"></script>

      <Component {...pageProps} />
    </>
  );
}
