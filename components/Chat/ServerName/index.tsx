import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { useServer } from '../../../contexts/ServerContext';

const ServerName: React.FC = () => {
    const { server } = useServer();

    return (
        <Flex
            gridArea="SN"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="0 11px 0 16px"
            backgroundColor="gray.800"
        >
            {server && (
                <>
                    <Text fontSize="16px" fontWeight="bold" color="white.500">
                        {server?.name}
                    </Text>

                    <ChevronDownIcon
                        width="28px"
                        height="28px"
                        color="white.500"
                        cursor="pointer"
                    />
                </>
            )}
        </Flex>
    );
};

export default ServerName;
