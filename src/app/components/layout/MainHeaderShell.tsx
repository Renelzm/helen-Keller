"use client";

import { AppShell, useMantineColorScheme } from '@mantine/core';
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { ReactNode } from "react";
import { HeaderBar } from "./headerComponents/superiorHeader/HeaderBar";
import { FooterCentered } from "./headerComponents/footer/footerCentered";
import { HeaderLateral } from './headerComponents/HeaderLateral';

interface HeaderShellProps {
  children: ReactNode;
}

export const MainHeaderShell = ({ children }: HeaderShellProps) => {
  const [opened, { toggle }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const isXs = useMediaQuery('(max-width: 576px)');
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <>
  
      <AppShell
        header={{ height: 65 }}
        navbar={{
          width: 200,
          breakpoint: "sm",
          collapsed: { mobile: !opened, desktop: desktopOpened },
          
        }}
        footer={{ height: 70 }}
        padding="md"
        styles={(theme) => ({
          header: {
            backgroundColor: theme.colors.blue[6], border: 0, // Ensure a single color is used
          },
          navbar: {
            backgroundColor: !isDark ? "#CA8A04" : theme.colors.dark[7], boxShadow: "inset 0px 10px 20px 0 rgba(20, 20, 20, 0.2)"// Dark mode conditional styling
          },
          main: {
            backgroundColor: '', // Use a single valid color for the background
          },
          footer: {
            backgroundColor: "#153d80", // Static background color for the footer
          },
        })}
      >
        {/* Contiene logo y navegadores */}
        <HeaderBar
          opened={opened}
          toggle={toggle}
          desktopOpened={desktopOpened}
          toggleDesk={toggleDesktop}

        />
    
        <AppShell.Navbar p="md" >
       
         
          <HeaderLateral 
          opened={opened}
          toggle={toggle}
          desktopOpened={desktopOpened}
          toggleDesk={toggleDesktop}
          isDark={isDark}
          />
         
         
    
     
        </AppShell.Navbar>

        <AppShell.Main>
         

          <div className={ isXs ? "mt-40" : "mt-20"} >{children} </div>
        </AppShell.Main>
        <AppShell.Footer p="xs" >
          <FooterCentered />
        </AppShell.Footer>
      </AppShell>
    </>
  );
};
