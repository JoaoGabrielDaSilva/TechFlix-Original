import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Movies from '../pages/Movie';
import Trending from '../pages/Trending'
import MovieDetails from '../pages/MovieDetails';
import MovieSearch from '../pages/MovieSearch';
import Login from '../pages/Login';

const PrivateRoute = ({component : Component , ...rest}: any) => {

  const authenticated = localStorage.getItem('signed') === 'true' ? true : false

  return <Route {...rest} render={props => (
    authenticated ? 
      <Component {...props } /> 
    : <Redirect to={{ pathname: '/login', state: {from: props.location }}}/>
  )} />
}

const Routes: React.FC = () => {
  return (
    <Switch >
        <PrivateRoute exact path="/trending" component={Trending}/>
        <PrivateRoute exact path="/movies" component={Movies}/>
        <PrivateRoute exact path="/movie-details" component={MovieDetails}/>
        <PrivateRoute exact path="/movie-search" component={MovieSearch}/>
        <Route exact path="/login" component={Login}/>
        <Redirect from="/" to="trending" />
    </Switch>
  );
}

export default Routes;