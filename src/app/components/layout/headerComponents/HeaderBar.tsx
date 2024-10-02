
import { ActionIcon, AppShell, Burger,  Group, Title } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { IconMoonFilled, IconSun } from "@tabler/icons-react";
import Image from "next/image";
import { NavigationBar } from "./NavigationBar";
import { useAppSelector } from '@/store';
import Link from 'next/link';


type Props = {
  opened: boolean;
  toggle: () => void;
  toggleDesk: () => void;
  desktopOpened: boolean;
};

export const HeaderBar = ({ opened, toggle, toggleDesk }: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const nombre = useAppSelector((state) => state.AppState.nombreInstitucion)
  return (
    <>
    <AppShell.Header >
      <Group
        h="100%"
        px="md"
        className={`${isDark ? "bg-yellow-600" : "bg-green-700"}`}
        style={{ position: "relative"}}
        >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="white" />
     
        <Image onClick={toggleDesk} src={`/helen-keller/bwlog.png`} width={60} height={40} alt="Logo"  style={{ cursor: 'pointer' }}  className="hover:opacity-75 transition-opacity duration-200 ml-7" />
        <Link href={'/'}>
        <Title order={3} c="#effee7" td="underline" fw={900} visibleFrom="sm">{nombre}</Title>
        </Link> 
  
        <ActionIcon
          variant="outline"
          radius="50"
          color="white"
          onClick={() => toggleColorScheme()}
          className="ml-auto"
          >
          {isDark ? (
            <IconSun color="white" />
          ) : (
            <IconMoonFilled color="white" />
          )}
        </ActionIcon>
 
     
        
      </Group>
      <NavigationBar/> 
    </AppShell.Header>

          </>
  );
};
