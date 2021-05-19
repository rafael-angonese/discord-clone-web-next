import React from 'react';
import { Grid } from '@chakra-ui/react';

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UI - User Info
import { ServerProvider } from '../../../contexts/ServerContext';
import { ChannelProvider } from '../../../contexts/ChannelContext';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';

const Layout: React.FC = () => {
    return (
        <ServerProvider>
            <ChannelProvider>
                <Grid
                    display="grid"
                    height="100vh"
                    templateColumns="71px 240px auto 240px"
                    templateRows="46px auto 52px"
                    templateAreas="
            'SL SN CI CI'
            'SL CL CD UL'
            'SL UI CD UL'
            "
                >
                    <ServerList />

                    <ServerName />

                    <ChannelInfo />

                    <ChannelList />

                    <UserInfo />

                    <ChannelData />

                    <UserList />
                </Grid>
            </ChannelProvider>
        </ServerProvider>
    );
};

export default Layout;
