import React from 'react';

import { Flex, Text, Container, Avatar } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { RiSettings3Fill } from 'react-icons/ri';
import { FaMicrophone, FaHeadphones } from 'react-icons/fa';

const UserInfo: React.FC = () => {
    return (
        <Flex
            gridArea="UI"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            backgroundColor="gray.900"
        >
            <Container display="flex" alignItems="center">
                <Avatar
                    name="Kola Tioluwani"
                    src="https://avatars.githubusercontent.com/u/48969567?v=4"
                    width="32px"
                    height="32px"
                />

                <Container display="flex" flexDirection="column">
                    <Text
                        display="block"
                        fontSize="13px"
                        fontWeight="500"
                        color="white.500"
                    >
                        Rafaelllll
                    </Text>
                    <Text
                        display="block"
                        fontSize="13px"
                        fontWeight="500"
                        color="white.500"
                    >
                        # 01965
                    </Text>
                </Container>
            </Container>

            <Container display="flex" alignItems="center">
                <Icon
                    as={FaMicrophone}
                    width="20px"
                    height="20px"
                    cursor="pointer"
                    opacity=".7"
                    color="white.500"
                    _hover={{ color: 'purple.600' }}
                />
                <Icon
                    as={FaHeadphones}
                    width="20px"
                    height="20px"
                    cursor="pointer"
                    opacity=".7"
                    color="white.500"
                    _hover={{ color: 'purple.600' }}
                />
                <Icon
                    as={RiSettings3Fill}
                    width="20px"
                    height="20px"
                    opacity=".7"
                    marginLeft="4px"
                    cursor="pointer"
                    color="white.500"
                    _hover={{ color: 'purple.600' }}
                />
            </Container>
        </Flex>
    );
};

export default UserInfo;
