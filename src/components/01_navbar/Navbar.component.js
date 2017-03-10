import React from 'react';
import { IndexLink, Link } from 'react-router';


class Navbar extends React.Component {
   constructor(){
      super();
      this.state = {
         collapsed: true
      };
   }

   toggleCollapse(){
      const collapsed = !this.state.collapsed;
      this.setState({ collapsed });
   }

   render(){
      const { location } = this.props;
      const featuredClass = location.pathname === '/' ? 'active' : '';
      const archivesClass = location.pathname.match(/^\/archives/) ? 'active' : '';
      const aboutClass = location.pathname.match(/^\/about/) ? 'active' : '';
      const { collapsed } = this.state;
      const navClass = collapsed ? 'collapse' : '';

      return (
         <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
               <div className="navbar-header">
                  <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar" />
                     <span className="icon-bar" />
                     <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="#">
                     <img
                        id="logo"
                        src="https://cdn3.iconfinder.com/data/icons/cleaning-icons/512/Bucket_with_Soap-512.png"
                        alt=""
                     /> MySandbox
                  </a>
               </div>

               <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                     <li className={featuredClass}>
                        <IndexLink to="/" >Featured</IndexLink>
                     </li>
                     <li className={archivesClass}>
                        <Link to="archives">Archives</Link>
                     </li>
                     <li className={aboutClass}>
                        <Link to="about">About</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      );
   }
}

export default Navbar;