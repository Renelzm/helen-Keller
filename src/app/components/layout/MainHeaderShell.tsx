"use client";

import { AppShell, Skeleton } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { ReactNode } from "react";
import { HeaderBar } from "./headerComponents/HeaderBar";
import { FooterCentered } from "./headerComponents/footerCentered";


interface HeaderShellProps {
  children: ReactNode;
}

export const MainHeaderShell = ({ children }: HeaderShellProps) => {
  const [opened, { toggle }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const isXs = useMediaQuery('(max-width: 576px)');
  return (
    <>
      <AppShell
        header={{ height: 65 }}
        navbar={{
          width: 120,
          breakpoint: "md",
          collapsed: { mobile: !opened, desktop: !desktopOpened },
        }}
        footer={{ height: 90 }}
        padding="md"
      >
        {/* Contiene logo y navegadores */}
        <HeaderBar
          opened={opened}
          toggle={toggle}
          desktopOpened={desktopOpened}
          toggleDesk={toggleDesktop}
        />
      

        <AppShell.Navbar p="md">
          Navbar
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={true} />
            ))}
        </AppShell.Navbar>

        <AppShell.Main>
         

          <div className={ isXs ? "mt-28" : "mt-20"} >{children} </div>
        </AppShell.Main>
        <AppShell.Footer p="md">
          <FooterCentered />
        </AppShell.Footer>
      </AppShell>
    </>
  );
};
