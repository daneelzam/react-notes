import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/auth/Dashboard/Dashboard';
import Login from './components/auth/Login/Login';
import Logout from './components/auth/Logout/Logout';
import SignUp from './components/auth/SignUp/SignUp';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div className='container-fluid d-flex flex-column align-items-center align-content-center' style={{ padding: 0, height: '100vh' }}>
    <Router>
        <NavBar/>
      <Switch>
        <Route exact path='/'> {isAuth ? <Redirect to='/dashboard'/> : <Redirect to='/login'/>} </Route>
        <Route path='/login'><Login /></Route>
        <Route path='/signup'><SignUp /></Route>
        <Route path='/logout'><Logout /></Route>
        <PrivateRoute path='/dashboard'><Dashboard /></PrivateRoute>
      </Switch>
    </Router>
    </div>
  );
}
export default App;
