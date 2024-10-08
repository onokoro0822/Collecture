// DesignProvider.tsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const DesignProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
};

export default DesignProvider;
