import React from 'react';

import { Button } from '@chakra-ui/react';

interface Props {
    selected?: Boolean;
    isHome?: Boolean;
    hasNotifications?: Boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
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
        </Button>
    );
};

export default ServerButton;
