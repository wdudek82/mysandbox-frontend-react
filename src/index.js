import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Archives from './components/00_learncode/Archives';
import Featured from './components/00_learncode/Featured';
import Settings from './components/00_learncode/Settings';
import Layout from './components/Layout.component';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './css/bootstrap-home.css';
import './css/index.css';


const app = document.getElementById('app');

ReactDOM.render(
   <Router history={hashHistory}>
      <Route path="/" component={Layout}>
         <IndexRoute component={Archives} />
         <Route path="archives(/:article)" name="archive" component={Featured} />
         <Route path="about" component={Settings} />
      </Route>
   </Router>,
   app
);
