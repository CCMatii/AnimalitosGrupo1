import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Detalles() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
  <Modal
        opened={opened}
        onClose={close}
        title="Nombre del animal"
>
  <div style={{
    backgroundColor: 'rgba(45, 214, 247, 1)', 
    border: '15px solid yellow',
    borderRadius: '10px',
    padding: '20px',
    }}>
      <img 
        src="https://via.placeholder.com/150" 
        alt="Animal" 
        style={{ width: '100%', height: '50%', borderRadius: '10px', marginBottom: '20px' }} 
        />
        <p>Aquí va la descripción del animal.</p>
      </div>
    </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}

export default Detalles;
