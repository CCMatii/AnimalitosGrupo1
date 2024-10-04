import "@mantine/core/styles.css";
import { MantineProvider, Container, Group, BackgroundImage, Box } from "@mantine/core";
import ComboBoxFilter from "./components/combobox";
import Titulo from "./components/title";
import Carrusel from "./components/carousel";

export default function App() {
  return (
    <MantineProvider>
      <Box style={{ width: '100vw', height: '100vh' }}>
            <BackgroundImage
              src="https://images.alphacoders.com/137/1373665.jpeg"
              radius="sm"
              style={{ width: '100%', height: '100%' }}
            >
              <Container>
                <Group gap="xl">
                <ComboBoxFilter />
                <Titulo />
                </Group>
                <Carrusel/>
              </Container>
            </BackgroundImage>
      </Box>
    </MantineProvider>
  );
}
