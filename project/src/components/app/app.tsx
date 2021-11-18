import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../../const';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import Room from '../room/room';

type AppProps = {
  offersCount: number,
  offers: Offers,
  reviews: Reviews[],
}

function App({offersCount, offers, reviews}: AppProps): JSX.Element {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main
            offers={offers}
            countOffer={ offersCount}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <PrivateRoute
          path={AppRoute.Favorites}
          render={() => <Favorites  offers={offers}/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Room
            offer = { offers[0] }
            reviews = { reviews }
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
