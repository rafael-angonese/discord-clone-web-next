import React from 'react';

import {
    forwardRef,
    ChakraProps,
    chakra,
    Container,
    ComponentWithAs
} from '@chakra-ui/react';
import { motion, MotionProps } from 'framer-motion';

import withAuth from '../utils/withAuth';

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
    MotionProps & {
        as?: React.ElementType;
    };

const MotionBox = motion(
    forwardRef<ChakraProps, 'div'>((props, ref) => {
        return <chakra.div ref={ref} {...props} />;
    })
) as ComponentWithAs<'div', MotionBoxProps>;

const Home: React.FC = () => {
    return (
        <>
            <Container
                h="100vh"
                d="flex"
                alignItems="center"
                justifyContent="center"
            >
                <MotionBox
                    as="aside"
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ['20%', '20%', '50%', '50%', '20%']
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 1
                    }}
                    padding="2"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    width="12"
                    height="12"
                    display="flex"
                />
            </Container>
        </>
    );
};

export default withAuth(Home);
