import React, { useRef, useEffect } from 'react';

import {
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { FiAtSign } from 'react-icons/fi';

import ChannelMessage from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

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
                <ChannelMessage
                    author="Rafael"
                    date="214/03/2021"
                    content="Mensagem lalaalla aqui"
                    hasMention={true}
                    isBot={true}
                />

                {Array.from(Array(20).keys()).map(n => (
                    <ChannelMessage
                        key={n}
                        author="Rafael"
                        date="214/03/2021"
                        content="Mensagem lalaalla aqui"
                        hasMention={true}
                        isBot={true}
                    />
                ))}

                <ChannelMessage
                    author="Rafael"
                    date="24/03/2021"
                    content="Aqui vai ser uma texto maior para ver como que fica"
                    hasMention={true}
                    isBot={true}
                />
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
                    <Input type="tel" placeholder="Pode falar oq quiser" />
                </InputGroup>
            </div>
        </Flex>
    );
};

export default ChannelData;
