'use client'

import React , {useEffect} from 'react';
import {auth} from '../../common/firebases';
import { useRouter } from 'next/navigation';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import { Flex, VStack, Heading } from '@chakra-ui/react';
import { getRedirectResult } from 'firebase/auth';

const SignInPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log('Successfully signed in with Google');
          router.push('/');
        }
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
      });
  }, []); // 初回レンダリング時のみ実行

  return (
    <Flex
      flexDirection='column'
      width='80%'
      height='100vh' // 高さを全画面に調整
      justifyContent='center'
      alignItems='center'
    >
      <VStack spacing='5'>
        <Heading>collectureにログインする</Heading>
        <GoogleLoginButton />
      </VStack>
    </Flex>
  );
};

export default SignInPage;
