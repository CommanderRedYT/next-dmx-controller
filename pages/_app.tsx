import {Provider as ReduxProvider} from 'react-redux';
import type { AppProps } from 'next/app';
import Router from 'next/router';

import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

import AppLayout from "../src/layout/AppLayout";
import {store} from "../src/store";

import useScrollTop from '../src/hooks/useScrollTop';

import '../src/styles/globals.css'

function DMXControllerApp({ Component, pageProps }: AppProps) {
    useScrollTop();

    Router.events.on('routeChangeStart', nProgress.start);
    Router.events.on('routeChangeError', nProgress.done);
    Router.events.on('routeChangeComplete', nProgress.done);

    return (
      <ReduxProvider store={store}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
      </ReduxProvider>
    );
}

export default DMXControllerApp;
