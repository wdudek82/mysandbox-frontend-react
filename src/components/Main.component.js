import React from 'react';

import Footer from './Footer.component';
import Header from './Header.component';
import Pager from './Pager.component';
import Post from './Post.component';
import Sidebar from './Sidebar.component';


class Main extends React.Component {
   render(){
      return (
         <main className="container">
            <div className="row">
               <div className="col-md-8">
                  <Header />
                  <Post />
                  <Post />
                  <Pager />
               </div>
               <Sidebar />
               <hr />
               <Footer />
            </div>
         </main>

      );
   }
}

export default Main;