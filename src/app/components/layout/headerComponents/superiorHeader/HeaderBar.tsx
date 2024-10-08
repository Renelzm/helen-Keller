
import { ActionIcon, AppShell, Burger,  Group, Title } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { IconMoonFilled, IconSun } from "@tabler/icons-react";
import Image from "next/image";
import { NavigationBar } from "./NavigationBar";
import { useAppSelector } from '@/store';
import Link from 'next/link';
import { useMediaQuery } from "@mantine/hooks";


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
  const isXs = useMediaQuery("(max-width: 576px)");
  return (
    <>
    <AppShell.Header >
    
    
      <Group
        h="100%"
        px="md"
        className={`${isDark ? "bg-yellow-600" : "bg-green-700"}`}
        style={{ position: "relative", boxShadow: isDark ? 'inset 0px -4px 6px #845902' : 'inset 0px -4px 6px #044c1e' }} 
        // #CA8A04
      >
            

        <Burger opened={opened} onClick={isXs ? toggle : toggleDesk}  size="sm" color="white" />
     {/* hiddenFrom="sm" */}
        <Image  src={`/helen-keller/59e76b0d8c18a.png`} width={60} height={40} alt="Logo"  style={{ cursor: 'pointer' }}  className="hover:opacity-75 transition-opacity duration-200 ml-7" />
        <Link href={'/'}>
        <Title order={isXs ? 5 : 3} c="#effee7" td="underline" fw={900} >{nombre}</Title>
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
      {/* <div style={{ backgroundColor: "#153d80", color:'white', position: "relative"}} className=" text-center">Juntos construimos la alegría de aprender</div> */}
      <NavigationBar/> 

    </AppShell.Header>

          </>
  );
};
