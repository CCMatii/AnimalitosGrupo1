import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text, Group } from '@mantine/core';
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
      <Button variant="white" color="dark">
        Detalles
      </Button>
    </Paper>
  );
}

// Definir los tipos de props con PropTypes
Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

function Carrusel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get('https://huachitos.cl/api/animales')
      .then((response) => {
        const animalData = response.data.data;
        setAnimals(animalData);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

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

  return (
    <Group justify="center">
      <Title order={2} style={{ marginTop: 40 }}>Animales 🐾</Title>
      <Carousel
        style={{ marginTop: 50, width: '150%', height: '500px' }}
        slideSize={mobile ? '100%' : '33.33%'}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
         {slides.length > 0 ? slides : <Text>No hay animales disponibles</Text>}
      </Carousel>
    </Group>
  );
}

export default Carrusel;
//npm install embla-carousel-react@^7.1.0 @mantine/carousel
//npm install prop-types