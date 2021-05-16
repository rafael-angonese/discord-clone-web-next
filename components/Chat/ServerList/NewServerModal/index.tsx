import React from 'react';
import { useState, useEffect } from 'react';
import * as yup from 'yup';

import { AddIcon } from '@chakra-ui/icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Tooltip,
    FormControl,
    FormLabel,
    Input,
    Text,
    useToast
} from '@chakra-ui/react';

import yupValidator from '../../../../utils/yupValidator';
import axios from '../../../../utils/axios';

interface Props {
    onClose: () => void;
}

const NewServerModal: React.FC<Props> = ({ onClose }) => {
    const toast = useToast();

    const [isOpen, setIsOpen] = useState(false);
    const initialRef = React.useRef();

    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSave = async event => {
        event.preventDefault();

        const schema = yup.object().shape({
            name: yup.string().required()
        });

        const data = {
            name: name
        };

        const validation = await yupValidator(schema, data);
        setError(validation);
        if (validation) return;

        setLoading(true);

        try {
            await axios.post('/servers', data);

            setLoading(false);

            setIsOpen(false);
            onClose();

            toast({
                title: 'Servidor criado com sucesso!',
                status: 'success',
                position: 'top-right',
                isClosable: true
            });
        } catch (error) {
            setLoading(false);
            setError(error);
            toast({
                title: 'Não foi possível criar o servidor',
                status: 'error',
                position: 'top-right',
                isClosable: true
            });
        }
    };

    useEffect(() => {
        setLoading(false);
        setError(null);
        setName('');
    }, [isOpen]);

    return (
        <>
            <Tooltip
                label="Adicionar um servidor"
                fontSize="md"
                placement="right"
            >
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
                    onClick={() => setIsOpen(true)}
                    _hover={{ backgroundColor: 'purple.600' }}
                >
                    <AddIcon />
                </Button>
            </Tooltip>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Crie um servidor
                        <Text fontSize="sm" color="gray.500" align="center">
                            Seu servidor é onde você e seus amigos se reúnem.
                            Crie o seu e comece a interagir.
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl isRequired>
                            <FormLabel>Nome do servidor</FormLabel>
                            <Input
                                ref={initialRef}
                                value={name}
                                isInvalid={error}
                                onChange={event => setName(event.target.value)}
                                placeholder="Digite o nome do servidor..."
                            />

                            {error?.name && (
                                <Text color="red.500" fontSize="sm">
                                    {error?.name?.message}
                                </Text>
                            )}
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            mr={3}
                            onClick={() => setIsOpen(false)}
                            isLoading={loading}
                        >
                            Cancelar
                        </Button>
                        <Button
                            colorScheme="blue"
                            onClick={onSave}
                            isLoading={loading}
                        >
                            Criar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default NewServerModal;
