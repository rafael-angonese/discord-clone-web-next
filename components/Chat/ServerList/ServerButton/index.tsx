import React from 'react';

import { Button } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';

import { useServer } from '../../../../contexts/ServerContext';

type Server = {
    id: number;
    name: string;
};

interface Props {
    item: Server;
}

const ServerButton: React.FC<Props> = ({ item }) => {
    const { server, setServerState } = useServer();
    return (
        <Tooltip label={item.name} fontSize="md" placement="right">
            <Button
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
                width="48px"
                height="48px"
                marginBottom="8px"
                backgroundColor={server?.id === item.id ? "purple.600" : ""}
                cursor="pointer"
                position="relative"
                borderRadius="50%"
                _hover={{ backgroundColor: 'purple.600' }}
                onClick={() => setServerState(item)}
            >
                <Avatar
                    padding="3px"
                    name="Kola Tioluwani"
                    background="none"
                    src={`https://i.pravatar.cc/150?img=${item.id}`}
                />
            </Button>
        </Tooltip>
    );
};

export default ServerButton;
