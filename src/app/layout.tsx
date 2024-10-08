
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { MainHeaderShell } from "./components/layout/MainHeaderShell";
import { Providers } from "./Providers";



export const metadata = {
  title: 'Hellen Keller',
  description: 'I have followed setup instructions carefully',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
      
    <html lang="es" data-mantine-color-scheme="light">
    
      <body>

        <Providers>
      <MainHeaderShell>
        
        {children}    
      </MainHeaderShell>
        </Providers>
         
      </body>
    </html>
        
  );
}
