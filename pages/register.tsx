import { useContext, useEffect, useState } from 'react';
import {
    Heading,
    Grid,
    Flex,
    Link,
    Button,
    Text,
    InputRightElement,
    Spinner,
    InputGroup,
    useToast
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import * as yup from 'yup';

import { useRouter } from 'next/router';

import yupValidator from '../utils/yupValidator';
import axios from '../utils/axios';

import Input from '../components/Input';
import AuthContext from '../contexts/auth';

const pages: React.FC = () => {
    const router = useRouter();
    const toast = useToast();
    const { token, is_loading } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');
    const [is_show_password, setIs_show_password] = useState(false);
    const [is_show_confirm_password, setIs_show_confirm_password] = useState(
        false
    );
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async event => {
        event.preventDefault();

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required(),
            confirm_password: yup
                .string()
                .required()
                .oneOf([yup.ref('password'), null], 'Passwords do not match')
        });

        const data = {
            name: name,
            email: email,
            password: password,
            confirm_password: confirm_password
        };

        const validation = await yupValidator(schema, data);
        setError(validation);
        if (validation) return;

        setLoading(true);

        try {
            await axios.post('/register', data);

            setLoading(false);

            toast({
                title: 'Conta registrada com sucesso!',
                status: 'success',
                position: 'top-right',
                isClosable: true
            });
            router.push('/login');
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    useEffect(() => {
        if (!is_loading && token) {
            router.replace('/chats');
        }
    }, [token, is_loading]);

    return (
        <Grid
            height="100vh"
            templateColumns="1fr 480px 480px 1fr"
            templateRows="1fr 600px 1fr"
            templateAreas="
            '. . . .'
            '. form logo .'
            '. . . .'
          "
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                gridArea="form"
                height="100%"
                backgroundColor="gray.700"
                borderRadius="md"
                flexDir="column"
                alignItems="stretch"
                padding={16}
            >
                <Input
                    placeholder="Seu nome"
                    value={name}
                    isInvalid={error?.name}
                    onChange={event => setName(event.target.value)}
                />

                {error?.name && (
                    <Text color="red.500" fontSize="sm">
                        {error?.name?.message}
                    </Text>
                )}

                <Input
                    placeholder="Seu E-mail"
                    value={email}
                    isInvalid={error?.email}
                    onChange={event => setEmail(event.target.value)}
                    marginTop={2}
                />

                {error?.email && (
                    <Text color="red.500" fontSize="sm">
                        {error?.email?.message}
                    </Text>
                )}

                <InputGroup size="md" marginTop={2}>
                    <Input
                        placeholder="Sua senha"
                        value={password}
                        isInvalid={error?.password}
                        pr="3.5rem"
                        onChange={event => setPassword(event.target.value)}
                        type={is_show_password ? 'text' : 'password'}
                    />
                    <InputRightElement width="3.5rem">
                        <Button
                            h="1.75rem"
                            onClick={() =>
                                setIs_show_password(!is_show_password)
                            }
                        >
                            {is_show_password ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                {error?.password && (
                    <Text color="red.500" fontSize="sm">
                        {error?.password?.message}
                    </Text>
                )}

                <InputGroup size="md" marginTop={2}>
                    <Input
                        placeholder="Confirme sua senha"
                        value={confirm_password}
                        isInvalid={error?.confirm_password}
                        pr="3.5rem"
                        onChange={event =>
                            setConfirm_password(event.target.value)
                        }
                        type={is_show_confirm_password ? 'text' : 'password'}
                    />
                    <InputRightElement width="3.5rem">
                        <Button
                            h="1.75rem"
                            onClick={() =>
                                setIs_show_confirm_password(
                                    !is_show_confirm_password
                                )
                            }
                        >
                            {is_show_confirm_password ? (
                                <ViewOffIcon />
                            ) : (
                                <ViewIcon />
                            )}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                {error?.confirm_password && (
                    <Text color="red.500" fontSize="sm">
                        {error?.confirm_password?.message}
                    </Text>
                )}

                <Text
                    textAlign="center"
                    fontSize="sm"
                    color="gray.300"
                    marginTop={6}
                >
                    Ao se registrar, você aceita nossos{' '}
                    <Link
                        color="purple.600"
                        fontWeight="bold"
                        _hover={{ color: 'purple.500' }}
                        // onClick={() => router.push('/terms')}
                    >
                        termos de uso
                    </Link>{' '}
                    e a nossa{' '}
                    <Link
                        color="purple.600"
                        fontWeight="bold"
                        _hover={{ color: 'purple.500' }}
                        // onClick={() => router.push('/privacy')}
                    >
                        política de privacidade
                    </Link>
                </Text>

                <Button
                    backgroundColor="purple.500"
                    height="50px"
                    borderRadius="sm"
                    marginTop={6}
                    onClick={handleLogin}
                    _hover={{ backgroundColor: 'purple.600' }}
                >
                    Cadastrar{' '}
                    {loading && (
                        <Spinner
                            position="absolute"
                            right="8px"
                            thickness="4px"
                        />
                    )}
                </Button>
            </Flex>

            <Flex gridArea="logo" flexDir="column" alignItems="flex-end">
                <Heading size="2xl" lineHeight="shorter">
                    Crie sua conta
                </Heading>

                <Text
                    textAlign="center"
                    fontSize="sm"
                    color="gray.300"
                    marginTop={6}
                >
                    Já possui uma conta?{' '}
                    <Link
                        color="purple.600"
                        fontWeight="bold"
                        _hover={{ color: 'purple.500' }}
                        onClick={() => router.push('/login')}
                    >
                        Ir para o Login
                    </Link>
                </Text>
            </Flex>
        </Grid>
    );
};

export default pages;
