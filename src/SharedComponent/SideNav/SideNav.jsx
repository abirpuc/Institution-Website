import React from 'react';
import './sidenav.css'
import Director from '../../Component/Director/Director';
import ImportantLink from '../../Component/ImportantLink/ImportantLink';
import Anthem from '../../Component/Anthem/Anthem';
import Visitor from '../../Component/Visitor/Visitor';
const SideNav = () => {
    return (
        <div className='sideNav__container'>
          <Director/>
          <ImportantLink/>
          <Anthem/>
          <Visitor/>
        </div>
    );
};

export default SideNav;