import React from 'react';

import Footer from './04_footer/Footer.component';
import Main from './02_main/Main.component';
import Navbar from './01_navbar/Navbar.component';


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