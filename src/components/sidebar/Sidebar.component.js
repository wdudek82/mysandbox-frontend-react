import React from 'react';

import Categories from './Categories.component';
import SearchWell from './SearchWell.component';
import SideWidget from './SideWidget.component';


class SidebarWidget extends React.Component {
   constructor(){
      super();
      this.state = {
         about: {
            title: 'About',
            content: `Python/JS Web Developer. In my projects I'm using:
                      [backend] Python/Django, PostgreSQL/MySQL/SQLite, Circus-Chaussette/Supervisor+uWSGI,
                      virtualenv or (recently) pyenv by Kenneth Reitz, Bash, Fabric, [...]
                      [frontend] HTML5, CSS3, Bootstrap, JavaScript (ES6), jQuery, ReacJS, [...]`
         }
      }
   }

   render(){
      return (
         <div className="col-md-4">
            <SideWidget
               title={this.state.about.title}
               content={this.state.about.content}
            />
            <SearchWell />
            <Categories />
            <SideWidget />
         </div>
      );
   }
}

export default SidebarWidget;