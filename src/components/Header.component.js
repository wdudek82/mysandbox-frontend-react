import React from 'react';


class Header extends React.Component {
   render(){
      return (
         <header>
            <h1 className="page-header">
               <p>Page Heading</p>
               <small>Secondary Text</small>
            </h1>
         </header>
      );
   }
}

export default Header;