import React from 'react';

import Footer from './Footer.component';
import Header from './Header.component';


class Layout extends React.Component {
   constructor(){
      super();
      this.state = {
         name: 'Wojtek',
         title: 'New title'
      };
   }

   changeTitle(title){
      this.setState({title});
   }

   render(){
      setTimeout(() => {
         this.setState({name: 'Neevor'});
      }, 5000);

      return (
         <div>
            <Header
               name={this.state.name}
               title={this.state.title}
               changeTitle={this.changeTitle.bind(this)}
            />
            <Header
               name={'Wojtek'}
               title={'Other title'}
               changeTitle={this.changeTitle.bind(this)}
            />
            <h1>It's working! Hello {this.state.name}!</h1>
            <Footer />
         </div>
      );
   }
}

export default Layout;