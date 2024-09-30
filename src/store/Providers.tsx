'use client'


import { Provider } from 'react-redux';
import { store } from '.';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../theme';


interface Props {
    children: React.ReactNode;
  
}
export const Providers = ({children} : Props)  => {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        {children}
      </MantineProvider>
    </Provider>
  )
}
