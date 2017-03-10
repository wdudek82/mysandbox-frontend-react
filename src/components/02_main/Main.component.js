import React from 'react';

import Header from './Header.component';
import Pager from './Pager.component';
import Post from './Post.component';
import Sidebar from '../03_sidebar/Sidebar.component'


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
                     inne przydatne biblioteki, podepnę tu backend napisany w Django (a może... Pyramid?
                     Ten framework również wydaje się być interesującą opcją).`

         },
         second: {
            title: 'Póki co statycznie...',
            image: 'https://stackpie.files.wordpress.com/2016/10/cracking-the-code.jpg?w=900&h=300&crop=1',
            content: `To jest dopiero początek. Panuje tu bałagan typowy dla placów budowy. W pewnym momencie
                      stwierdziłem jednak, że muszę przestać odkładać wdrożenie mojego własnego projektu,
                      ponieważ przesadny perfekcjonizm kazał mi do tej pory w nieskończonośc doskonalić warsztat,
                      biegłość w posługiwaniu się narzędziami, z których ostatecznie nie korzystałem, ponieważ
                      wydawało mi się, że wciąż jeszcze za wcześnie. Chcę teraz spróbować odmiennego podejścia, które
                      dobrze sprawdza się w przypadku nauki języków obcych - wrzucam ten rodzący się dopiero
                      projekt po to, by widzieć, że faktycznie robię coś realnego, że coś zostaje po tych godzinach
                      zabawy w IDE i nauki, by nie kończyło się wyłącznie na trudnym do oszacowania przyroście wiedzy
                      (czego potem nie jestem w stanie nikomu pokazać - np. potencjalnemu pracodawcy lub klientowi).
                      Zresztą jedną z największych radości w pracy programisty jest możliwość budowania.`
         }
      }
   }

   render(){
      const posts = [
         this.state.first,
         this.state.second
      ].map((item, index) => (
         <Post
            key={index}
            title={item.title}
            datetime={item.datetime}
            image={item.image}
            content={item.content}
         />
         )
      );

      return (
         <div>
            <main className="container">
               <div className="row">
                  <div className="col-md-8">
                     <Header />
                     {posts}
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