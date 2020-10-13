import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import { LoadingProgress } from '../components';

const TVShowPage = lazy(() => import(/* webpackChunkName: "TVShowPage" */ '../pages/tv-show-page'));
const EpisodeDetailPage = lazy(() => import(/* webpackChunkName: "EpisodeDetailPage" */ '../pages/episode-detail-page'));

const Routes = () => (
  <Suspense fallback={<LoadingProgress open />}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (
          <Redirect to="show" />
        )} />
        <Route exact path="/show" component={TVShowPage} />
        <Route exact path="/episodes/:episodesId" component={EpisodeDetailPage} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default Routes;