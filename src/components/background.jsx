import { BackgroundImage, Center, Title, Box } from '@mantine/core';

function Background() {
  return (
    <Box style={{ width: '100vw', height: '100vh' }}>
      <BackgroundImage
        src="https://images.alphacoders.com/137/1373665.jpeg"
        radius="sm"
        style={{ width: '100%', height: '100%' }}
      >
        <Center p="md" style={{ height: '100%' }}>
        <Title order={1}>Animalitos en Adopción</Title>
        </Center>
      </BackgroundImage>
    </Box>
  );
}
export default Background;
