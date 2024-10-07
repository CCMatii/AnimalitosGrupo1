import "@mantine/core/styles.css";
import { MantineProvider, Container, Group, BackgroundImage, Box } from "@mantine/core";
import ComboBoxFilter from "./components/combobox";
import Titulo from "./components/title";
import CarruselAnimales from "./components/carouselAnimals";
import CarruselPerros from "./components/carouselDogs";
import CarruselGatos from "./components/carouselCats";
import CarruselConejos from "./components/carouselRabbit";
import CarruselRoedores from "./components/carouselMouse";
import CarruselAves from "./components/carouselBird";

export default function App() {
  return (
    <MantineProvider>
      <Box style={{ width: '100vw', height: '100vh' }}>
            <BackgroundImage
              src="https://img.freepik.com/vector-gratis/adorable-patron-huella-animal-diseno-fondo_1017-53348.jpg"
              radius="sm"
              style={{minHeight: '100vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                }}
            >
              <Container>
                <Group gap="xl">
                <ComboBoxFilter />
                <Titulo />
                </Group>
                <CarruselAnimales/>
                <CarruselPerros/>
                <CarruselGatos/>
                <CarruselConejos/>
                <CarruselRoedores/>
                <CarruselAves/>
              </Container>
            </BackgroundImage>
      </Box>
    </MantineProvider>
  );
}
