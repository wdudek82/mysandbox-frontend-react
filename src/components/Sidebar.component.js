import React from 'react';

import Categories from './Categories.component';
import SearchWell from './SearchWell.component';
import SideWidget from './SideWidget.component';


class SidebarWidget extends React.Component {
   render(){
      return (
         <div className="col-md-4">
            <SearchWell />
            <Categories />
            <SideWidget />
         </div>
      );
   }
}

export default SidebarWidget;