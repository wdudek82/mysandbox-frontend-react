import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Archive from './components/Archive.component';
import Featured from './components/Featured.component';
import Layout from './components/Layout.component';
import Settings from './components/Settings.component';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap-home.css';
import './css/index.css';


// const archive = document.getElementById('archive');
// const featured = document.getElementById('featured');
const layout = document.getElementById('layout');
// const settings = document.getElementById('settings');

ReactDOM.render(
   <Router history={hashHistory}>
      <Route path="/" component={Layout}>
         <IndexRoute component={Featured}></IndexRoute>
         <Route path="archive" component={Archive}></Route>
         <Route path="settings" component={Settings}></Route>
      </Route>
   </Router>,
   layout
);
