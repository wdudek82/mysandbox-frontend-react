import React from 'react';

import Header from './Header.component';
import Pager from './Pager.component';
import Post from './Post.component';
import Sidebar from '../sidebar/Sidebar.component';


class Main extends React.Component {
   constructor(){
      super();
      this.state = {
         first: {
            title: 'Hello World!',
            datetime: 'March 10, 2017 at 11:53 AM',
            image: 'http://www.craigcallen.com/wp-content/uploads/2016/05/kids-coding-featured.jpg',
            content: `Projekt 'MySandbox' życie rozpoczął jako aplikacja djangowa.
                     Potem pojawił się pomysł dodania pewnych elementów JS... z czego wynikła
                     nauka React-Redux. Zacząłem więc od zera przerabiając nowy szablon
                     bootstrapowy na zbiór Reactowych komponentów. Gdy opanuję Reacta oraz
                     inne przydatne biblioteki, podepnę tu backend napisany w Django (a może... Pyramid? :?).`

         },
         second: {
            image: 'https://stackpie.files.wordpress.com/2016/10/cracking-the-code.jpg?w=900&h=300&crop=1',
         }
      }
   }

   render(){
      const { first } = this.state;
      const { second } = this.state;

      return (
         <div>
            <main className="container">
               <div className="row">
                  <div className="col-md-8">
                     <Header />
                     <Post
                        title={first.title}
                        datetime={first.datetime}
                        image={first.image}
                        content={first.content}
                     />
                     <Post
                        image={second.image}
                     />
                     <Pager />
                  </div>
                  <Sidebar />
               </div>
               <hr />
            </main>
         </div>

      );
   }
}

export default Main;