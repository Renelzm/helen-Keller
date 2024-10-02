import { AspectRatio, Divider, Title } from '@mantine/core';

export default function page() {
  return (
    <>
  <Divider my="xs" label={<Title order={2}>Ubicación</Title>} labelPosition="center" />
    <AspectRatio ratio={16 / 9} className=' p-10'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5095.459918523964!2d-100.95270284963227!3d25.437118060869476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86880d63d38819e3%3A0x624ced0bf0dc31ff!2sColegio%20Helen%20Keller!5e0!3m2!1ses!2smx!4v1727807307301!5m2!1ses!2smx"
        title="Google map"
        style={{ border: 2 }}
      />
    </AspectRatio>
    
    </>
  )
}
