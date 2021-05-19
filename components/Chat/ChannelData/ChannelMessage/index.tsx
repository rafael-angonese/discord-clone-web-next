import React from 'react';

import { Text, Avatar } from '@chakra-ui/react';

import { format } from 'date-fns'

export interface Props {
    authorId: number;
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
    authorId,
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
                src={`https://i.pravatar.cc/150?img=${authorId}`}
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
                        {format(new Date(date), 'dd/MM/yyyy HH:mm:ss')}
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
