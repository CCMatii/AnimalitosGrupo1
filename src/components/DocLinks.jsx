import "./DocLinks.css";
import { Flex, Group, Image, Title, Button } from "@mantine/core";
import viteLogo from "../assets/vite-logo.svg";
import reactLogo from "../assets/react-logo.svg";
import mantineLogo from "../assets/mantine-logo.svg";
import { IconBrandGithub } from "@tabler/icons-react";

const Links = () => {
  return (
    <Flex
      className="links"
      justify="center"
      direction="column"
      align="center"
      style={{ height: "100vh" }}
    >
      <Group justify="center" gap="lg">
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          <Image className="logo vite" src={viteLogo} alt="Vite Logo" />
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="logo react" src={reactLogo} alt="React Logo" />
        </a>
        <a
          href="https://mantine.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="logo mantine"
            src={mantineLogo}
            alt="Mantine Logo"
          />
        </a>
      </Group>
      <Title className="title" order={1} align="center">
        React + Mantine Template
      </Title>
      <Group
        align="center"
        justify="center"
        gap="md"
        style={{ marginBottom: 20 }}
      >
        <img
          alt="GitHub package.json dev/peer/optional dependency version"
          src="https://img.shields.io/github/package-json/dependency-version/awerito/react-mantine-template/dev/vite?logo=vite"
        />
        <img
          alt="GitHub package.json prod dependency version"
          src="https://img.shields.io/github/package-json/dependency-version/awerito/react-mantine-template/%40mantine%2Fcore?logo=mantine"
        />
        <img
          alt="GitHub package.json prod dependency version"
          src="https://img.shields.io/github/package-json/dependency-version/awerito/react-mantine-template/react?logo=react"
        />
        <img
          alt="GitHub License"
          src="https://img.shields.io/github/license/awerito/react-mantine-template?logo=github"
        />
      </Group>
      <Button
        component="a"
        href="https://github.com/Awerito/react-mantine-template"
        target="_blank"
        rel="noopener noreferrer"
        color="gray"
      >
        Repository: <IconBrandGithub size="1.5rem" />
      </Button>
    </Flex>
  );
};

export default Links;
