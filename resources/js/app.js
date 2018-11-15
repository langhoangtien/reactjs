
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

// require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/Example');



// resources\assets\js\app.js

import React from 'react'
import { render } from 'react-dom'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import UserList from './components/UserList'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

const history = createBrowserHistory()
render (
  <Router history={history}>
    <Switch>
      <Route path='/users/create' component={CreateUser} />
      <Route path='/users/edit/:id' component={EditUser} />
      <Route path='/posts/create' component={CreatePost} />
      <Route path='/posts/list' component={PostList} />
      <Route path='/' component={UserList} />

    </Switch>
  </Router>, document.getElementById('app'))