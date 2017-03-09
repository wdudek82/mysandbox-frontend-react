import React from 'react';

import Main from './Main.component';
import Navbar from './Navbar.component';


class Layout extends React.Component {
   render(){
      return (
         <div>
            <Navbar />
            <Main />
         </div>
      );
   }
}

export default Layout;