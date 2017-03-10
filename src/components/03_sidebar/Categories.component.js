import React from 'react';


class Categories extends React.Component {
   render(){
      return (
         <div className="row">
            <div className="col-xs-6">
               <ul className="list-unstyled">
                  <li><a href="#">Python</a></li>
                  <li><a href="#">JavaScript</a></li>
                  <li><a href="#">PHP</a></li>
                  <li><a href="#">Node</a></li>
               </ul>
            </div>
            <div className="col-xs-6">
               <ul className="list-unstyled">
                  <li><a href="#">Django</a></li>
                  <li><a href="#">React</a></li>
                  <li><a href="#">Laravel</a></li>
                  <li><a href="#">Express</a></li>
               </ul>
            </div>
         </div>
      );
   }
}

export default Categories;