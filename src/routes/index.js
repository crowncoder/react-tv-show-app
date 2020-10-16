import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import { LoadingProgress } from '../ui';

const TVShowPage = lazy(() => import(/* webpackChunkName: "TVShowPage" */ '../pages/tv-show-page/index'));
const EpisodeDetailPage = lazy(() => import(/* webpackChunkName: "EpisodeDetailPage" */ '../pages/episode-detail-page'));

const Routes = () => (
  <Suspense fallback={<LoadingProgress />}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (
          <Redirect to="show/6771" />
        )} />
        <Route exact path="/show/:tvShowId" component={TVShowPage} />
        <Route exact path="/episodes/:episodeId/:episodeName" component={EpisodeDetailPage} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default Routes;