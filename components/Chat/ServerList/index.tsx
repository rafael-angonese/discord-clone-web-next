import React from 'react';
import { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { Skeleton, SkeletonCircle } from '@chakra-ui/react';

import ServerButton from './ServerButton';
import NewServerModal from './NewServerModal';

import axios from '../../../utils/axios';
import { useServer } from '../../../contexts/ServerContext';

type Server = {
    id: number;
    name: string;
};

const ServerList: React.FC = () => {
    const { server } = useServer();

    const [loading, setLoading] = useState(true);
    const [servers, setServers] = useState<Server[] | []>([]);

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

    useEffect(() => {
        if (!server) {
            getServers();
        }
    }, [server]);

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
            {!loading && (
                <>
                    <NewServerModal
                        onClose={() => {
                            getServers();
                        }}
                    />
                    {servers &&
                        servers.map(item => {
                            return <ServerButton key={item.id} item={item} />;
                        })}
                </>
            )}

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
