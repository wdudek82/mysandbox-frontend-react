import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Archives from './components/Archives.component';
import Featured from './components/00_learncode/Featured.component';
import Layout from './components/Layout.component';
import Settings from './components/00_learncode/Settings';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './css/bootstrap-home.css';
import './css/index.css';


// const archive = document.getElementById('archive');
// const featured = document.getElementById('featured');
const app = document.getElementById('app');
// const settings = document.getElementById('settings');

ReactDOM.render(
   <Router history={hashHistory}>
      <Route path="/" component={Layout}>
         <IndexRoute component={Featured}></IndexRoute>
         <Route path="archives(/:article)" name="archive" component={Archives}></Route>
         <Route path="settings" component={Settings}></Route>
      </Route>
   </Router>,
   app
);
