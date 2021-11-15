import './App.css';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Home/Products/Products';
import Details from './Pages/Home/Details/Details';
import Explores from './Pages/Home/Explores/Explores';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        {/* <Home/> */}
        <Switch>
          <Route path="/home">
          <Home/>
            </Route>
          <Route path="/products">
          <Explores/>
          </Route>
          <PrivateRoute path="/explores">
          <Products/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
          <Dashboard/>
          </PrivateRoute>
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/register">
          <Register/>
          </Route>
          <PrivateRoute path="/details/:id">
          <Details/>
          </PrivateRoute>
          <Route exact path="/">
          <Home/>
            </Route>
          </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
