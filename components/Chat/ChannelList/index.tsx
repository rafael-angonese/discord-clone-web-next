import React, { useEffect, useState } from 'react';

import { Flex, Text, Container } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { RiUserAddLine } from 'react-icons/ri';

import { useServer } from '../../../contexts/ServerContext';
import axios from '../../../utils/axios';

import ChannelButton from './ChannelButton';

type Channel = {
    id: number;
    name: string;
};

const UserInfo: React.FC = () => {
    const { server } = useServer();

    const [loading, setLoading] = useState(true);
    const [channels, setChannels] = useState<Channel[] | []>([]);

    const getChannels = async () => {

        setLoading(true);
        try {
            const response = await axios.get(`/channels/${server.id}`);
            setLoading(false);
            setChannels(response.data);
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        getChannels();
    }, [server]);

    return (
        <Flex
            gridArea="CL"
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="24px 9.5px 0 5px"
            backgroundColor="gray.700"
        >
            <Container
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                marginBottom="10px"
            >
                <Text
                    textTransform="uppercase"
                    fontSize="12px"
                    fontWeight="500"
                    color="white.500"
                >
                    Canais de texto
                </Text>
                <Icon
                    as={RiUserAddLine}
                    width="21px"
                    height="21px"
                    cursor="pointer"
                    color="white.500"
                />
            </Container>

            {!loading && (
                <>
                    {channels &&
                        channels.map(item => {
                            return (
                                <ChannelButton
                                    key={item.id}
                                    item={item}
                                />
                            );
                        })}
                </>
            )}
        </Flex>
    );
};

export default UserInfo;
