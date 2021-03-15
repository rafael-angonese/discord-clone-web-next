import React from 'react';

import { Button, Container, Text, Avatar } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { RiUserAddLine, RiSettings3Fill } from 'react-icons/ri';
import { FaHashtag } from 'react-icons/fa';

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
    author,
    date,
    content,
    hasMention,
    isBot
}) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px 16px',
                marginRight: '4px',
                backgroundColor: 'transparent',
                paddingLeft: '14px'
            }}
        >
            <Avatar
                name="Kola Tioluwani"
                src="https://bit.ly/tioluwani-kolawole"
                width="40px"
                height="40px"
            />

            <div
                style={{
                    display: 'flex',
                    minHeight: '40px',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginLeft: '17px'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Text fontSize="16px">{author}</Text>
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
                    <Text marginLeft="6px" fontSize="13px">
                        {date}
                    </Text>
                </div>
                <Text textAlign="left" fontSize="16px">
                    {content}
                </Text>
            </div>
        </div>
    );
};

export default ChannelMessage;
