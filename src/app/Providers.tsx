'use client'

import { Provider } from 'react-redux';
import { store } from '../store';
import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';
import { theme } from '../../theme';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // Para saber si el cliente ya está listo

  useEffect(() => {
    // Este código se ejecuta solo en el cliente después de que el componente se haya montado
    const storedTheme = localStorage.getItem('mantine-color-scheme-value');
    if (storedTheme === 'dark') {
      setIsDark(true);
    }
    setIsHydrated(true); // Marcamos como hidratado para proceder a renderizar
  }, []);

  // Si no está hidratado, no renderizamos el contenido
  if (!isHydrated) {
    return null; // O un loader si quieres mostrar algo mientras tanto
  }

  return (
    <Provider store={store}>
      <MantineProvider theme={theme} defaultColorScheme={isDark ? 'dark' : 'light'}>
        {children}
      </MantineProvider>
    </Provider>
  );
};