import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/auth/Dashboard/Dashboard';
import Login from './components/auth/Login/Login';
import Logout from './components/auth/Logout/Logout';
import SignUp from './components/auth/SignUp/SignUp';

function App() {
  return (
    <>
    <Router>
        <NavBar/>
      <Switch>
        <Route exact path='/'> Main Information about our app </Route>
        <Route path='/login'><Login /></Route>
        <Route path='/signup'><SignUp /></Route>
        <Route path='/logout'><Logout /></Route>
        <PrivateRoute path='/dashboard'><Dashboard /></PrivateRoute>
      </Switch>
    </Router>
    </>
  );
}
export default App;
