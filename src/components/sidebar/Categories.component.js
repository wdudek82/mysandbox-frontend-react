import React from 'react';


class Categories extends React.Component {
   render(){
      return (
         <div className="well">
            <h4>Blog Categories</h4>
            <div className="row">
               <div className="col-lg-6">
                  <ul className="list-unstyled">
                     <li><a href="#">Category Name</a>
                     </li>
                     <li><a href="#">Category Name</a>
                     </li>
                     <li><a href="#">Category Name</a>
                     </li>
                     <li><a href="#">Category Name</a>
                     </li>
                  </ul>
               </div>
               <div className="col-lg-6">
                  <ul className="list-unstyled">
                     <li><a href="#">Category Name</a>
                     </li>
                     <li><a href="#">Category Name</a>
                     </li>
                     <li><a href="#">Category Name</a>
                     </li>
                     <li><a href="#">Category Name</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      );
   }
}

export default Categories;