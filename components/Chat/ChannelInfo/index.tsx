import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { FaHashtag } from 'react-icons/fa';

const ServerInfo: React.FC = () => {
    return (
        <Flex
            gridArea="CI"
            display="flex"
            alignItems="center"
            padding="0 17px"
            backgroundColor="gray.600"
        >
            <Icon as={FaHashtag} width="28px" height="28px" color="white.500" />

            <Text
                marginLeft="16px"
                fontWeight="bold"
                fontSize="16px"
                color="white.500"
            >
                Chat livre
            </Text>

            <Text
                height="24px"
                width="1px"
                color="white.100"
                opacity="0.2"
                margin="0 13px"
            >
                |
            </Text>

            <Text fontSize="15px" color="white.300">
                Essa é a descricao do grupo
            </Text>
        </Flex>
    );
};

export default ServerInfo;
