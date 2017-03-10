import React from 'react';

import Footer from './footer/Footer.component';
import Main from './main/Main.component';
import Navbar from './navbar/Navbar.component';


class Layout extends React.Component {
   render(){
      const { location } = this.props;

      console.log(this.props);
      return (
         <div>
            <Navbar location={location} />
            <Main />
            <Footer />
         </div>
      );
   }
}

export default Layout;