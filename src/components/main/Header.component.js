import React from 'react';


class Header extends React.Component {
   render(){
      return (
         <header>
            <h1 className="page-header">
               <p>
                  MySandbox&nbsp;
                  <a href="#" title="add new post">
                     <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                  </a>
               </p>
               <small>
                  My technological testing ground for discovering, breaking,
                  dissecting & creating interesting stuff!:)
               </small>
            </h1>
         </header>
      );
   }
}

export default Header;