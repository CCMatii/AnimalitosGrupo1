import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import DocLinks from "./components/DocLinks";

export default function App() {
  return (
    <MantineProvider>
      <DocLinks />
    </MantineProvider>
  );
}
