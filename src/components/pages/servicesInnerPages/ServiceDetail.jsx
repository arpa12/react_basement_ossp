import React from 'react';
import { useParams } from 'react-router-dom';
import BidaCard from './BidaCard';
import DsccCard from './DsccCard';
import NbrCard from './NbrCard';
import RjscCard from './RjscCard';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    let Component;

    switch (serviceId) {
        case '1':
            Component = RjscCard;
            break;
        case '2':
            Component = DsccCard;
            break;
        case '3':
            Component = NbrCard;
            break;
        case '4':
            Component = BidaCard;
            break;
        default:
            Component = () => <div>Service Not Found</div>;
    }

    return <Component />;
};

export default ServiceDetail;
