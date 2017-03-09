import React from 'react';
import { Link } from 'react-router';


class Layout extends React.Component {
   navigate(){
      console.log(this.props.router);
      // also: pushState, replace, replaceState?
      this.props.router.push('/');
   }

   render(){
      return (
        <div>
           <h1>KillerNews.net</h1>
           {this.props.children}
           <Link to="archive">
              <button className="btn btn-primary">archives</button>
           </Link>&nbsp;
           <Link to="settings">
              <button className="btn btn-success">settings</button>
           </Link>&nbsp;
           <button onClick={this.navigate.bind(this)}>featured</button>
        </div>
      );
   }
}

export default Layout;