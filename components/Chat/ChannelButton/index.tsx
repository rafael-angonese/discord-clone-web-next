import React from 'react';

import { Button, Container, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { RiUserAddLine, RiSettings3Fill } from 'react-icons/ri';
import { FaHashtag } from 'react-icons/fa';

interface Props {
    channelName?: string;
}

const ChannelButton: React.FC<Props> = ({ channelName }) => {
    return (
        <Container
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            cursor="pointer"
            marginBottom="5px 3px"
            borderRadius="5px"
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon
                    as={FaHashtag}
                    width="20px"
                    height="20px"
                    color="white.500"
                />

                <Text
                    fontSize="15px"
                    color="white.500"
                    marginLeft="5px"
                    _hover={{ color: 'purple.600' }}
                >
                    {channelName}
                </Text>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon
                    as={RiUserAddLine}
                    width="16px"
                    height="16px"
                    cursor="pointer"
                    color="white.500"
                    _hover={{ color: 'purple.600' }}
                />
                <Icon
                    as={RiSettings3Fill}
                    width="16px"
                    height="16px"
                    marginLeft="4px"
                    cursor="pointer"
                    color="white.500"
                    _hover={{ color: 'purple.600' }}
                />
            </div>
        </Container>
    );
};

export default ChannelButton;
