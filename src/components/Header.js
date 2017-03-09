import React from 'react';


class Header extends React.Component {
   handleChange(event){
      const title = event.target.value;
      this.props.changeTitle(title);
   }

   render(){
      return (
         <div>
            <header>
               {this.props.title} [set by {this.props.name}]
            </header>
            <input
               value={this.props.title}
               type="text"
               onChange={this.handleChange.bind(this)}
            />
         </div>

      );
   }
}

export default Header;