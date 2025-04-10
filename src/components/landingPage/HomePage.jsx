// components/landingPage/HomePage.jsx
import React from 'react';
import Slider from './Slider';
import Services from './services';
import Notice from './Notice';
import Media from './Media';

const HomePage = () => {
    return (
        <>
            <Slider />
            <Services />
            <Notice />
            <Media />
        </>
    );
};

export default HomePage;
