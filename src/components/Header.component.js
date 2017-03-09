import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {
   navigate(){
      console.log(this.props.router);
      // also: pushState, replace, replaceState?
      this.props.router.push('/');
   }

   render(){
      const { router } = this.props;
      // console.log(router.isActive('archive'));

      return (
         <header>
            <h1 className="page-header">
               <p>Page Heading</p>
               <small>Secondary Text</small>
            </h1>

            {this.props.children}
            <Link to="archive" activeClassName="test1">
               <button className="btn btn-primary">archives</button>
            </Link>&nbsp;
            <Link to="settings" activeClassName="test2">
               <button className="btn btn-success">settings</button>
            </Link>&nbsp;
            <button
               className="btn btn-warning"
               onClick={this.navigate.bind(this)}>
               featured
            </button>
         </header>
      );
   }
}

export default Header;