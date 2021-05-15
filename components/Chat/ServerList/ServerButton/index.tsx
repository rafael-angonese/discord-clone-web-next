import React from 'react';

import { Button } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';

type Server = {
    id: number;
    name: string;
};

interface Props {
    server: Server;
}

const ServerButton: React.FC<Props> = ({ server }) => {
    return (
        <Tooltip label={server.name} fontSize="md" placement="right">
            <Button
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
                width="48px"
                height="48px"
                marginBottom="8px"
                backgroundColor="purple.500"
                cursor="pointer"
                position="relative"
                borderRadius="50%"
                _hover={{ backgroundColor: 'purple.600' }}
            >
                <Avatar
                    padding="3px"
                    name="Kola Tioluwani"
                    background="none"
                    src={`https://i.pravatar.cc/150?img=${server.id}`}
                />
            </Button>
        </Tooltip>
    );
};

export default ServerButton;
