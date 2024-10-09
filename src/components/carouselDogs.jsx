import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { Button, Paper, Modal, Title, useMantineTheme, Text, Group, Center } from '@mantine/core';
import classes from './carousel.module.css';
import '@mantine/carousel/styles.css';

function Card({ image, title, category, age , genre, descipcion1, descripcion2, esterilizado}) {
  const [opened, setOpened] = useState(false);
  const estadoEsterilizado = esterilizado === 1 ? "Está esterilizado" : "No está esterilizado";

  return (
    <>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{
          backgroundImage: `url(${image})`,
          height: '300px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
        <Button
          variant="filled"
          color="gray"
          size="md"
          radius="xl"
          onClick={() => setOpened(true)}
        >
          Detalles
        </Button>
      </Paper>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={title}
      >
        <div
          style={{
            backgroundColor: 'rgba(45, 214, 247, 1)',
            border: '15px solid yellow',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <img
            src= {image}
            alt="Animal"
            style={{
              width: '100%',
              height: '50%',
              borderRadius: '10px',
              marginBottom: '20px',
            }}
          />
          <Text>Edad: {age}</Text>
          <Text>Sexo: {genre}</Text>
          <Text>{estadoEsterilizado}</Text> 
          <Text>{descripcion2}</Text> 
          <Text>{descipcion1}</Text> 
        </div>
      </Modal>
    </>
  );
}


Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

function CarruselPerros({ selectedRegionId }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    
    let link = `https://huachitos.cl/api/animales/tipo/perro`;

    if (selectedRegionId !== 0 && selectedRegionId >= 1 && selectedRegionId <= 16) {
      link = `https://huachitos.cl/api/animales/region/${selectedRegionId}/tipo/perro/estado/adopcion`;
    }

    fetch(link)
      .then(response => response.json())
      .then(data => {
        if (data.message && data.message.includes("No se encontraron animales")) {
          setAnimals([]);
        } else {
          setAnimals(data.data || []);
        }
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  }, [selectedRegionId]);

  if (isLoading) {
    return (
      <Center style={{ width: '100%', height: '500px' }}>
        <Text size="xl">Cargando...</Text>
      </Center>
    );
  }

  if (error) {
    return (
      <Center style={{ width: '100%', height: '500px' }}>
        <Text size="xl">Ha ocurrido un error: {error.message}</Text>
      </Center>
    );
  }


  const slides = []


  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    slides.push(
      <Carousel.Slide key={animal.id}>
        <Card
          image={animal.imagen}
          title={animal.nombre}
          category={animal.estado}
          age={animal.edad}
          genre={animal.genero}
          descipcion1= {animal.desc_fisica}
          descripcion2={animal.desc_personalidad}
          esterilizado={animal.esterilizado}
        />
      </Carousel.Slide>
    );
  }

  if (animals.length === 0) {
    return null;
  }

  return (
    <Group justify="center">
      <Title order={2} style={{ marginTop: 40 }}>Perros 🐕</Title>
      <Carousel
        style={{ marginTop: 50, width: '150%', height: '300px' }}
        slideSize={mobile ? '100%' : '33.33%'}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
         {slides}
      </Carousel>
    </Group>
  );
}

export default CarruselPerros;