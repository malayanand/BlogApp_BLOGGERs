import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/auth/Register';
import SignIn from './components/auth/Login';
import LogOut from './components/auth/Logout';
import BlogView from './components/posts/BlogView';
import Search from './components/posts/Search';
import Admin from './Admin';
import Edit from './components/admin/edit';
import Delete from './components/admin/delete';
import Create from './components/admin/create';

const routing = (
  <Router>
    <React.StrictMode>
      <Header />

      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/create" component={Create} />
        <Route exact path="/admin/edit/:id" component={Edit} />
        <Route exact path="/admin/delete/:id" component={Delete} />
        <Route path='/register' component={SignUp} />
        <Route path='/login' component={SignIn} />
        <Route path='/logout' component={LogOut} />
        <Route path='/post/:slug' component={BlogView} />
        <Route path="/search" component={Search} />
      </Switch>
      
      <Footer />
    </React.StrictMode>
  </Router>
);


ReactDOM.render(routing, document.getElementById('root'));
