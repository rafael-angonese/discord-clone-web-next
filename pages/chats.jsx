import React from 'react';
import withAuth from '../utils/withAuth';

import LayoutChat from '../components/Chat/Layout';

function chats() {
    return <LayoutChat />;
}

export default withAuth(chats);
