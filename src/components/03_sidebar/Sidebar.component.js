import React from 'react';

import Categories from './Categories.component';
import Search from './Search.component';
import SideWidget from './SideWidget.component';


class Sidebar extends React.Component {
   constructor(){
      super();
      this.state = {
         about: {
            title: 'About',
            content: this.aboutContent()
         },
         search: {
            title: 'Blog Search',
            content: <Search />
         },
         categories: {
            title: 'Blog Categories',
            content: <Categories />
         },
         weather: {
            title: 'Weather'
         },
         airPollution: {
            title: 'Air Pollution'
         }
      };
   }

   aboutContent = () => (
      <div>
         <p>Python/JS Web Developer. In my projects I'm using:</p>
         <p>
            backend: Python/Django, PostgreSQL/MySQL/SQLite, Circus-Chaussette/Supervisor+uWSGI,
            virtualenv or (recently) pyenv by Kenneth Reitz, Bash Scripting, Fabric, [...]
         </p>
         <p>
            frontend: HTML5, CSS3, Bootstrap, JavaScript (ES6), jQuery, ReacJS, [...]
         </p>
      </div>
   );

   render(){
      const sideWidgets = [
         this.state.about,
         this.state.search,
         this.state.weather,
         this.state.airPollution,
         this.state.categories,
      ].map((sideWidget, index) => (
         <SideWidget key={index} title={sideWidget.title} content={sideWidget.content} />
      ));

      return (
         <div className="col-md-4">
            {sideWidgets}
         </div>
      );
   }
}

export default Sidebar;