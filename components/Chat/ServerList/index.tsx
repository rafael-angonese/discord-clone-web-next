import React from 'react';

import { Flex } from '@chakra-ui/react';

import ServerButton from './ServerButton';

const ServerList: React.FC = () => {
    return (
        <Flex
            gridArea="SL"
            display="flex"
            flexDir="column"
            alignItems="center"
            backgroundColor="gray.600"
            padding="11px 0"
            maxHeight="100vh"
            overflowY="scroll"
            css={{
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }}
        >
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
        </Flex>
    );
};

export default ServerList;
