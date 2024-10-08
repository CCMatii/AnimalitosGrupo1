import "@mantine/core/styles.css";
import { useState } from "react";
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
  const [selectedRegionId, setSelectedRegionId] = useState(0);
  const carruselAnimales = <CarruselAnimales selectedRegionId={selectedRegionId}/>;
  const carruselPerros = <CarruselPerros selectedRegionId={selectedRegionId}/>;
  const carruselGatos = <CarruselGatos selectedRegionId={selectedRegionId}/>;
  const carruselConejos = <CarruselConejos selectedRegionId={selectedRegionId}/>;
  const carruselRoedores = <CarruselRoedores selectedRegionId={selectedRegionId}/>;
  const carruselAves = <CarruselAves selectedRegionId={selectedRegionId}/>;

  const areAllCarouselsEmpty = 
    !carruselAnimales &&
    !carruselPerros &&
    !carruselGatos &&
    !carruselConejos &&
    !carruselRoedores &&
    !carruselAves;

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
                <ComboBoxFilter onRegionChange={setSelectedRegionId}/>
                <Titulo />
                </Group>
                {areAllCarouselsEmpty ? (
                <Image
                src="https://cdn-icons-png.flaticon.com/512/4634/4634731.png"
                alt="No hay animales disponibles con estos filtros."
                style={{ marginTop: '40px' }}
                />
                ) : (
                  <>
                  {carruselAnimales}
                  {carruselPerros}
                  {carruselGatos}
                  {carruselConejos}
                  {carruselRoedores}
                  {carruselAves}
                  </>
                )}
              </Container>
            </BackgroundImage>
      </Box>
    </MantineProvider>
  );
}
