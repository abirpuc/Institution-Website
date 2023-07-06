import React from 'react';
import './sidenav.css'
import Director from '../../Component/Director/Director';
import ImportantLink from '../../Component/ImportantLink/ImportantLink';
import Anthem from '../../Component/Anthem/Anthem';
import Visitor from '../../Component/Visitor/Visitor';
import HotLine from '../../Component/HotLine/HotLine';
import Helpline from '../../Component/Helpline/Helpline';
const SideNav = () => {
    return (
        <div>
          <Director/>
          <ImportantLink/>
          <Anthem/>
          <Helpline/>
        </div>
    );
};

export default SideNav;