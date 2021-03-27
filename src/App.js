import './App.css';
import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
// import Home from './views/HomePage/HomePage';
// import MoviesPage from './views/MoviesPage/MoviesPage';
// import MoviesPageDetails from './components/MovieDetailsPage/MovieDetailsPage';
import HeaderNav from './components/Header/Header';

const HomeViews = lazy(() =>
  import('./views/HomePage/HomePage' /*WebpackChunkName: "Home"*/),
);
const MoviesViews = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /*WebpackChunkName: "MoviesViews"*/),
);
const MoviesPageDetailsViews = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage' /*WebpackChunkName: "MoviesPageDetailsViews"*/
  ),
);

const App = () => (
  <>
    <HeaderNav />
    <Suspense fallback={<span>Loading...</span>}>
      <Switch>
        <Route path={routes.home} exact component={HomeViews} />
        <Route exact path={routes.moviewsPage} component={MoviesViews} />
        <Route
          path={routes.moviewsPageDetails}
          component={MoviesPageDetailsViews}
        />
      </Switch>
    </Suspense>
  </>
);

export default App;
