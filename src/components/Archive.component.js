import React from 'react';


class Archive extends React.Component {
   render(){
      console.log(this.props);
      console.log(this.props.location.query);

      // Caching & shortening props lookup
      // const { params } = this.props;
      const { article } = this.props.params;
      const { date, filter } = this.props.location.query;

      console.log(date, filter);

      return (
         <div>
            <h1>Archive ({article})</h1>
            <h4>date: {date}, filter: {filter}</h4>
         </div>
      );
   }
}

export default Archive;