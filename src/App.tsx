import React, { Suspense } from 'react';
import { Global } from '@emotion/core';
import { Router, RouteComponentProps } from '@reach/router';
import { globalStyles } from '@/styles/global';
import PageLoader from '@/components/PageLoader';

const lazyComponent = (importFn: () => Promise<{ default: React.ComponentType<any> }>) =>
  React.lazy<React.ComponentType<RouteComponentProps>>(importFn);

const HomePage = lazyComponent(() => import('@/pages/HomePage'));
const MoviesPage = lazyComponent(() => import('@/pages/MoviesPage'));
const SeriesPage = lazyComponent(() => import('@/pages/SeriesPage'));
const DocumentariesPage = lazyComponent(() => import('@/pages/DocumentariesPage'));

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Suspense fallback={<PageLoader />}>
        <Router className="h-full">
          <HomePage path="/" />
          <MoviesPage path="/movies" />
          <SeriesPage path="/series" />
          <DocumentariesPage path="/documentaries" />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
