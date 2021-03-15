import React from 'react';

import { Flex, Text, Container  } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { RiUserAddLine } from 'react-icons/ri';

import ChannelButton from '../ChannelButton';

const UserInfo: React.FC = () => {
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

            <ChannelButton channelName='lolzinho' />
            <ChannelButton channelName='valorant' />
            <ChannelButton channelName='csgo' />
            <ChannelButton channelName='free fire' />
        </Flex>
    );
};

export default UserInfo;
