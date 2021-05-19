import React from 'react';

import { Container, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { RiUserAddLine, RiSettings3Fill } from 'react-icons/ri';
import { FaHashtag } from 'react-icons/fa';

import { useChannel } from '../../../../contexts/ChannelContext';

type Channel = {
    id: number;
    name: string;
};

interface Props {
    item: Channel;
}

const ChannelButton: React.FC<Props> = ({ item }) => {
    const { channel, setChannelState } = useChannel();

    return (
        <Container
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            cursor="pointer"
            marginBottom="5px 3px"
            borderRadius="5px"
        >
            <div
                style={{ display: 'flex', alignItems: 'center' }}
                onClick={() => setChannelState(item)}
            >
                <Icon
                    as={FaHashtag}
                    width="20px"
                    height="20px"
                    color={channel?.id === item.id ? "purple.600" : "white.500" }
                />

                <Text
                    fontSize="15px"
                    color={channel?.id === item.id ? "purple.600" : "white.500" }
                    marginLeft="5px"
                    _hover={{ color: 'purple.600' }}
                >
                    {item.name}
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
