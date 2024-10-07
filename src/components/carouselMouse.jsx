import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text, Group, Center } from '@mantine/core';
import classes from './carousel.module.css';
import '@mantine/carousel/styles.css';

function Card({ image, title, category }) {
  return (
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
      <Button variant="filled" color="gray" size="md" radius="xl">
        Detalles
      </Button>
    </Paper>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

function CarruselRoedores() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    fetch(`https://huachitos.cl/api/animales/tipo/roedor`)
      .then(response => response.json())
      .then(data => setAnimals(data.data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  }, []);

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
        />
      </Carousel.Slide>
    );
  }

  if (animals.length === 0) {
    return null;
  }

  return (
    <Group justify="center">
      <Title order={2} style={{ marginTop: 40 }}>Roedores 🐁</Title>
      <Carousel
        style={{ marginTop: 50, width: '150%', height: '500px' }}
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

export default CarruselRoedores;