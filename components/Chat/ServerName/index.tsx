import React from 'react';
import { useState } from 'react';

import { ChevronDownIcon, DeleteIcon } from '@chakra-ui/icons';

import {
    Flex,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    useToast,
    Badge,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay
} from '@chakra-ui/react';

import axios from '../../../utils/axios';
import { useServer } from '../../../contexts/ServerContext';

const ServerName: React.FC = () => {
    const { server, setServerState } = useServer();
    const toast = useToast();

    const cancelRef = React.useRef();

    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onDelete = async event => {
        event.preventDefault();

        setLoading(true);

        try {
            await axios.delete(`/servers/${server.id}`);

            setLoading(false);
            setIsOpen(false);
            setServerState(null);

            toast({
                title: 'Servidor excluído com sucesso!',
                status: 'success',
                position: 'top-right',
                isClosable: true
            });
        } catch (error) {
            setLoading(false);
            setError(error);
            toast({
                title: 'Não foi possível excluir o servidor',
                status: 'error',
                position: 'top-right',
                isClosable: true
            });
        }
    };

    return (
        <Flex
            gridArea="SN"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="0 11px 0 16px"
            backgroundColor="gray.800"
        >
            {server && (
                <>
                    <Text fontSize="16px" fontWeight="bold" color="white.500">
                        {server?.name}
                    </Text>

                    <Menu>
                        <MenuButton>
                            <ChevronDownIcon
                                width="28px"
                                height="28px"
                                color="white.500"
                                cursor="pointer"
                            />
                        </MenuButton>
                        <MenuList>
                            <MenuItem
                                color="red.400"
                                onClick={() => setIsOpen(true)}
                            >
                                <DeleteIcon /> Excluir servidor
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </>
            )}

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={() => setIsOpen(false)}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Excluir "{server?.name}"
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Deseja mesmo excluir{' '}
                            <Badge colorScheme="purple">{server?.name}</Badge>?
                            Esta ação é irreversível.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button
                                ref={cancelRef}
                                isLoading={loading}
                                onClick={() => setIsOpen(false)}
                            >
                                Cancelar
                            </Button>
                            <Button
                                colorScheme="red"
                                isLoading={loading}
                                onClick={onDelete}
                                ml={3}
                            >
                                Excluir servidor
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Flex>
    );
};

export default ServerName;
