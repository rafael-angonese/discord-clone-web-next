import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const ServerName: React.FC = () => {
    return (
        <Flex
            gridArea="SN"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="0 11px 0 16px"
            backgroundColor="gray.800"
        >
            <Text fontSize="16px" fontWeight="bold" color="white.500">
                Servidor do Rafael
            </Text>
            <ChevronDownIcon
                width="28px"
                height="28px"
                color="white.500"
                cursor="pointer"
            />
        </Flex>
    );
};

export default ServerName;
