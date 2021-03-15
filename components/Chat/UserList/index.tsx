import React from 'react';

import { Flex, Text, Container, Avatar } from '@chakra-ui/react';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <Container
            marginTop="5px"
            padding="5px"
            display="flex"
            alignItems="center"
            cursor="pointer"
            background="transparent"
            _hover={{ backgroundColor: 'purple.600' }}
        >
            <Avatar
                name="Kola Tioluwani"
                src="https://bit.ly/tioluwani-kolawole"
                width="32px"
                height="32px"
            />

            <Text
                marginLeft="13px"
                fontWeight="500"
                opacity="0.7"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                overflow="hidden"
                color="white.500"
            >
                {nickname}
            </Text>

            {isBot && (
                <Text
                    marginLeft="9px"
                    backgroundColor="purple.500"
                    borderRadius="4px"
                    padding="4px 5px"
                    textTransform="uppercase"
                    fontSize="11px"
                    fontWeight="bold"
                    color="white.500"
                >
                    Bot
                </Text>
            )}
        </Container>
    );
};

const UserList: React.FC = () => {
    return (
        <Flex
            gridArea="UL"
            display="flex"
            flexDirection="column"
            padding="3px 6px 0px"
            backgroundColor="gray.900"
            maxHeight="calc(100vh - 46px)"
            overflowY="scroll"
            css={{
                '&::-webkit-scrollbar': {
                    width: '4px'
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'gray.300',
                    borderRadius: '4px'
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: 'gray.600'
                }
            }}
        >
            <Text
                marginTop="20px"
                textTransform="uppercase"
                fontSize="12px"
                fontWeight="500"
                color="white.500"
            >
                Deuses do Next
            </Text>

            <UserRow nickname="dsfafsdf" isBot={true} />
            <UserRow nickname="Rafael Angonese" isBot={true} />
            <UserRow nickname="dsfafsdf" isBot={true} />
            <UserRow nickname="dsfafsdf" isBot={true} />
            <UserRow nickname="dsfafsdf" isBot={true} />
            <UserRow nickname="dsfafsdf" isBot={false} />
            <UserRow nickname="dsfafsdf" isBot={false} />
            <UserRow nickname="dsfafsdf" isBot={true} />
            <UserRow nickname="dsfafsdf" isBot={true} />
            <UserRow nickname="dsfafsdf" isBot={false} />
            <UserRow nickname="dsfafsdf" isBot={true} />
            <UserRow nickname="dsfafsdf" isBot={true} />
            <UserRow nickname="dsfafsdf" isBot={true} />
            <UserRow nickname="dsfafsdf" isBot={true} />
            <UserRow nickname="dsfafsdf" isBot={true} />
            <UserRow nickname="dsfafsdf" isBot={true} />
            <UserRow nickname="dsfafsdf" isBot={true} />
        </Flex>
    );
};

export default UserList;
