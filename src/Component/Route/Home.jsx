import React from 'react';
import TopBanner from '../../SharedComponent/topBanner/TopBanner';
import Banner from '../Banner/Banner';
import TextSlider from '../Texslider/TextSlider';
import NoticeBoard from '../NoticeBoard/NoticeBoard';
import RouteContainer from '../Routecontainer/RouteContainer';
import Memory from '../Memory/Memory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TextSlider/>
            <NoticeBoard/>
            <RouteContainer/>
            <Memory/>
        </div>
    );
};

export default Home;