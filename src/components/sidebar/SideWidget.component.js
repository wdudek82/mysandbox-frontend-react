import React from 'react';


class SideWidget extends React.Component {
   render(){
      return (
         <aside className="well">
            <h4>{this.props.title}</h4>
            <p>
               {this.props.content}
            </p>
         </aside>
      )
   }
}

SideWidget.defaultProps = {
   title: 'Side Widget Well',
   content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Inventore, perspiciatis adipisci accusamus laudantium odit aliquam
             repellat tempore quos aspernatur vero.`
};

export default SideWidget;