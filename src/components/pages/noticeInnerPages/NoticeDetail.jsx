import React from 'react';
import { useParams } from 'react-router-dom';
import Notice1 from './Notice1';
import Notice2 from './Notice2';
import Notice3 from './Notice3';

const NoticeDetail = () => {
    const { noticeId } = useParams();  // Get noticeId from the URL

    let Component;

    // Dynamically load the correct notice based on the ID in the URL
    switch (noticeId) {
        case '1':
            Component = Notice1;
            break;
        case '2':
            Component = Notice2;
            break;
        case '3':
            Component = Notice3;
            break;
        default:
            Component = () => <div>Notice Not Found</div>;
    }

    return <Component />;
};

export default NoticeDetail;
