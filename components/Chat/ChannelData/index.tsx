import React, { useRef, useEffect, useState, useContext } from 'react';

import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { FiAtSign } from 'react-icons/fi';

import { useChannel } from '../../../contexts/ChannelContext';
import AuthContext from '../../../contexts/AuthContext';
import axios from '../../../utils/axios';
import socket from '../../../utils/socket';

import ChannelMessage from './ChannelMessage';

type User = {
    id: number;
    name: string;
};

type Message = {
    id: number;
    message: string;
    user: User;
    created_at: string;
};

const ChannelData: React.FC = () => {
    const { channel } = useChannel();
    const { user } = useContext(AuthContext);
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const [message, setMessage] = useState('');
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState<Message[] | []>([]);

    const sendMessage = async event => {
        if (event.key === 'Enter') {
            if (message) {
                socket.emit('sendMessage', {
                    message: message,
                    channel_id: channel.id,
                    user_id: user.id
                });

                setMessage('');
            }
        }
    };

    const getChannelMessages = async () => {
        try {
            const response = await axios.get(`/channel_messages/${channel.id}`);
            setMessages(response.data);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    };

    useEffect(() => {
        getChannelMessages();
    }, [channel]);

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef, messages]);

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });
        socket.on('disconnect', () => {
            setIsConnected(false);
        });
        socket.on('newMessage', data => {
            getChannelMessages();
        });
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('newMessage');
        };
    }, [getChannelMessages]);

    return (
        <Flex
            gridArea="CD"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            backgroundColor="gray.800"
        >
            <Flex
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                padding="20px 0"
                maxHeight="calc(100vh - 46px - 68px)"
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
                ref={messagesRef}
            >
                {!loading && (
                    <>
                        {messages &&
                            messages.map(item => {
                                return (
                                    <ChannelMessage
                                        key={item.id}
                                        authorId={item.user.id}
                                        author={item.user.name}
                                        date={item.created_at}
                                        content={item.message}
                                        hasMention={true}
                                        isBot={true}
                                    />
                                );
                            })}
                    </>
                )}
            </Flex>

            <div style={{ width: '100%', padding: '0 16px' }}>
                <InputGroup
                    width="100%"
                    height="44px"
                    padding="0 10px 0 3px"
                    borderRadius="7px"
                    color="white.500"
                    backgroundColor="grey.500"
                >
                    <InputLeftElement
                        pointerEvents="none"
                        children={
                            <Icon
                                as={FiAtSign}
                                width="24px"
                                height="24px"
                                color="white.500"
                            />
                        }
                    />
                    <Input
                        onKeyPress={sendMessage}
                        placeholder="Digite sua mensagem"
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                    />
                </InputGroup>
            </div>
        </Flex>
    );
};

export default ChannelData;
