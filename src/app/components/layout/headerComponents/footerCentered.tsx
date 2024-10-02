import { Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandYoutube, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterCentered.module.css'
import { useMediaQuery } from '@mantine/hooks';

const links = [
  { link: '#', label: 'Contacto: 844 136 0454' },

  { link: '#', label: 'Correo: cehkeller@yahoo.com.mx' },
  { link: '#', label: 'Dirección: PINAR #1047 PRADERAS 25295, Saltillo, Coahuila.' },
];

export function FooterCentered() {
  const items = links.map((link) => (
    <Anchor
      c="white"
      key={link.label}
      lh={1}
    //   onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));
  const isXs = useMediaQuery('(max-width: 576px)');
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>

        { isXs ? "" : <Group className={classes.links}>{items}</Group>}
        

        <Group gap="md" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}