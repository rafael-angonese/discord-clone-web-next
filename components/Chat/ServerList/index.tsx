import React from 'react';
import { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { Skeleton, SkeletonCircle } from '@chakra-ui/react';

import ServerButton from './ServerButton';

import axios from '../../../utils/axios';

type Server = {
    id: number;
    name: string;
};

const ServerList: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [servers, setServers] = useState<Server[] | []>([]);

    useEffect(() => {
        const getServers = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/servers');

                setLoading(false);
                setServers(response.data);
            } catch (error) {
                setLoading(false);
            }
        };

        getServers();
    }, []);

    return (
        <Flex
            gridArea="SL"
            display="flex"
            flexDir="column"
            alignItems="center"
            backgroundColor="gray.600"
            padding="11px 0"
            maxHeight="100vh"
            overflowY="scroll"
            css={{
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }}
        >
            {!loading &&
                servers &&
                servers.map(item => {
                    return <ServerButton key={item.id} server={item} />;
                })}

            {loading && (
                <Skeleton isLoaded={true}>
                    <SkeletonCircle size="14" />
                    <SkeletonCircle size="14" />
                    <SkeletonCircle size="14" />
                    <SkeletonCircle size="14" />
                    <SkeletonCircle size="14" />
                    <SkeletonCircle size="14" />
                    <SkeletonCircle size="14" />
                    <SkeletonCircle size="14" />
                    <SkeletonCircle size="14" />
                    <SkeletonCircle size="14" />
                    <SkeletonCircle size="14" />
                </Skeleton>
            )}
        </Flex>
    );
};

export default ServerList;
