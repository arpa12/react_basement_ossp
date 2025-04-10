import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/landingPage/Navbar';
import Footer from './components/landingPage/Footer';
import HomePage from './components/landingPage/HomePage';
import AboutPage from './components/pages/navbarInnerPages/AboutPage';
import WhyPage from './components/pages/navbarInnerPages/WhyPage';
import LoginPage from './components/pages/navbarInnerPages/LoginPage';
import SignUpPage from './components/pages/navbarInnerPages/SignUpPage';
import HelpPage from './components/pages/navbarInnerPages/HelpPage';
import ServiceDetail from './components/pages/servicesInnerPages/ServiceDetail';
import NoticeDetail from './components/pages/noticeInnerPages/NoticeDetail';  // Import NoticeDetail

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/why" element={<WhyPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/help" element={<HelpPage />} />

                {/* Dynamic routes for service inner pages */}
                <Route path="/service/:serviceId" element={<ServiceDetail />} />

                {/* Dynamic routes for notice inner pages */}
                <Route path="/notice/:noticeId" element={<NoticeDetail />} /> {/* This will load the correct notice page */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
