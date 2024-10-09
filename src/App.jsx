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
              src="https://img.freepik.com/vector-gratis/fondo-huellas-patas-diseno-plano_23-2151169501.jpg?t=st=1728515781~exp=1728519381~hmac=684dabdaf504a198d9eb89d53d23e44f65304dde2aee74a3c0a8af278501652e&w=1380"
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
                
                <CarruselAnimales selectedRegionId={selectedRegionId}/>
                <CarruselPerros selectedRegionId={selectedRegionId}/>
                <CarruselGatos selectedRegionId={selectedRegionId}/>
                <CarruselConejos selectedRegionId={selectedRegionId}/>
                <CarruselRoedores selectedRegionId={selectedRegionId}/>
                <CarruselAves selectedRegionId={selectedRegionId}/>

              </Container>
            </BackgroundImage>
      </Box>
    </MantineProvider>
  );
}
