import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import AuthContext from '../contexts/auth';

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

import yupValidator from '../utils/yupValidator';
import axios from '../utils/axios';

import Divider from '../components/Divider';
import Input from '../components/Input';

const pages: React.FC = () => {
    const router = useRouter();
    const toast = useToast();
    const { setAuthToken } = useContext(AuthContext);
    const { token, is_loading } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [is_show_password, setIs_show_password] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async event => {
        event.preventDefault();

        const schema = yup.object().shape({
            email: yup.string().required().email(),
            password: yup.string().required()
        });

        const data = {
            email: email,
            password: password
        };

        const validation = await yupValidator(schema, data);
        setError(validation);
        if (validation) return;

        setLoading(true);

        try {
            const response = await axios.post('/authenticate', data);

            await setAuthToken(response.data.token);

            setLoading(false);

            toast({
                title: 'Login efetuado com sucesso!',
                status: 'success',
                position: 'top-right',
                isClosable: true
            });
            router.push('/chats');
        } catch (error) {
            setLoading(false);
            setError(error);
            toast({
                title: 'Crendecias inválidas',
                status: 'error',
                position: 'top-right',
                isClosable: true
            });
        }
    };

    useEffect(() => {
        if (!is_loading && token) {
            router.replace('/private');
        }
    }, [token, is_loading]);

    return (
        <Grid
            height="100vh"
            templateColumns="1fr 480px 480px 1fr"
            templateRows="1fr 480px 1fr"
            templateAreas="
            '. . . .'
            '. logo form .'
            '. . . .'
          "
            justifyContent="center"
            alignItems="center"
        >
            <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
                <Heading size="2xl" lineHeight="shorter">
                    Faça seu login na plataforma
                </Heading>
            </Flex>

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
                    placeholder="E-mail"
                    value={email}
                    isInvalid={error}
                    onChange={event => setEmail(event.target.value)}
                />

                {error?.email && (
                    <Text color="red.500" fontSize="sm">
                        {error?.email?.message}
                    </Text>
                )}

                <InputGroup size="md" marginTop={2}>
                    <Input
                        placeholder="Senha"
                        value={password}
                        isInvalid={error}
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

                <Link
                    alignSelf="flex-start"
                    marginTop={2}
                    fontSize="sm"
                    color="purple.600"
                    fontWeight="bold"
                    _hover={{ color: 'purple.500' }}
                >
                    Esqueci minha senha
                </Link>

                <Button
                    backgroundColor="purple.500"
                    height="50px"
                    borderRadius="sm"
                    marginTop={6}
                    onClick={handleLogin}
                    _hover={{ backgroundColor: 'purple.600' }}
                >
                    ENTRAR{' '}
                    {loading && (
                        <Spinner
                            position="absolute"
                            right="8px"
                            thickness="4px"
                        />
                    )}
                </Button>

                <Text
                    textAlign="center"
                    fontSize="sm"
                    color="gray.300"
                    marginTop={6}
                >
                    Não tem uma conta?{' '}
                    <Link
                        color="purple.600"
                        fontWeight="bold"
                        _hover={{ color: 'purple.500' }}
                        onClick={() => router.push('/register')}
                    >
                        Registre-se
                    </Link>
                </Text>

                <Divider />

                {/* <Flex alignItems="center">
                    <Text fontSize="sm">Ou entre com</Text>
                    <Button
                        height="50px"
                        flex="1"
                        backgroundColor="gray.600"
                        marginLeft={6}
                        onClick={() => signOut()}
                        borderRadius="sm"
                        _hover={{ backgroundColor: 'purple.500' }}
                    >
                        GITHUB
                    </Button>
                </Flex> */}
            </Flex>
        </Grid>
    );
};

export default pages;
