import React from 'react';


class Pager extends React.Component {
   render(){
      return(
         <ul className="pager">
            <li className="previous">
               <a href="#">&larr; Older</a>
            </li>
            <li className="next">
               <a href="#">Newer &rarr;</a>
            </li>
         </ul>
      );
   }
}

export default Pager;