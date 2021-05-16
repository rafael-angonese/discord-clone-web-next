import React from 'react';
import { useEffect, useState } from 'react';

import {
    Flex,
    Text,
    Container,
    Avatar,
    Skeleton,
    SkeletonCircle
} from '@chakra-ui/react';

import axios from '../../../utils/axios';

interface UserProps {
    id: number;
    nickname: string;
    isBot?: boolean;
}

interface User {
    id: number;
    name: string;
    isBot?: boolean;
}

const SkelonUserRow: React.FC = () => {
    return (
        <Container
            display="flex"
            alignItems="center"
            justifyContent="space-between"
        >
            <Container>
                <SkeletonCircle size="14" />
            </Container>

            <Container>
                <Skeleton height="20px" my="10px" />
            </Container>
        </Container>
    );
};

const UserRow: React.FC<UserProps> = ({ nickname, isBot, id }) => {
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
                src={`https://i.pravatar.cc/150?img=${id}`}
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
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[] | []>([]);

    const getUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/users');

            setLoading(false);
            setUsers(response.data);
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

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

            {!loading && (
                <>
                    {users &&
                        users.map(item => {
                            return (
                                <UserRow
                                    key={item.id}
                                    nickname={item.name}
                                    id={item.id}
                                    isBot={true}
                                />
                            );
                        })}
                </>
            )}

            {loading && (
                <div>
                    <SkelonUserRow />
                    <SkelonUserRow />
                    <SkelonUserRow />
                    <SkelonUserRow />
                    <SkelonUserRow />
                    <SkelonUserRow />
                    <SkelonUserRow />
                    <SkelonUserRow />
                    <SkelonUserRow />
                    <SkelonUserRow />
                    <SkelonUserRow />
                    <SkelonUserRow />
                    <SkelonUserRow />
                </div>
            )}
        </Flex>
    );
};

export default UserList;
