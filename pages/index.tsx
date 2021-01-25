import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { QuestionMark } from '../styles/icons';
export default function Home() {
  const [name, setName] = React.useState('');
  return (
    <Box display={{ base: 'block', lg: 'block', xl: 'flex' }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/okd8dph.css"
        ></link>
      </Head>

      <Input
        type="text"
        placeholder={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button leftIcon={<QuestionMark />}>Help</Button>
      <Text color="green">{name}</Text>
      <Heading>
        Learn <a href="https://nextjs.org">NEXT JS</a>
      </Heading>
    </Box>
  );
}
