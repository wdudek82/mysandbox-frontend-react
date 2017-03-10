import React from 'react';


class Search extends React.Component {
   render(){
      return (
         <div className="input-group">
            <input type="text" className="form-control"/>
            <span className="input-group-btn">
               <button className="btn btn-default" type="button">
                  <span className="glyphicon glyphicon-search"/>
               </button>
            </span>
         </div>
      );
   }
}

export default Search;