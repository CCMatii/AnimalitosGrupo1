import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const regions = [ //Arreglo de Regiones
  { name: 'Todas las Regiones', id: 0 },
  { name: 'Arica y Parinacota', id: 1 },
  { name: 'Tarapacá', id: 2 },
  { name: 'Antofagasta', id: 3 },
  { name: 'Atacama', id: 4 },
  { name: 'Coquimbo', id: 5 },
  { name: 'Valparaíso', id: 6 },
  { name: 'RM', id: 7 },
  { name: 'O´Higgins', id: 8 },
  { name: 'Maule', id: 9 },
  { name: 'Ñuble', id: 10 },
  { name: 'Biobío', id: 11 },
  { name: 'La Araucanía', id: 12 },
  { name: 'Los Ríos', id: 13 },
  { name: 'Los Lagos', id: 14 },
  { name: 'Aisén', id: 15 },
  { name: 'Magallanes y Antártica Chilena', id: 16 },
];

function ComboBoxFilter({ onRegionChange }) { //Componente Combobox
  const combobox = useCombobox();
  const [value, setValue] = useState('Todas las Regiones');
  const shouldFilterOptions = !regions.some((item) => item.name === value);
  const filteredOptions = shouldFilterOptions
    ? regions.filter((item) => item.name.toLowerCase().includes(value.toLowerCase().trim()))
    : regions;

  const options = filteredOptions.map((item) => ( //Pone todo el arreglo de regiones dentro del combobox como opción
    <Combobox.Option value={item.name} key={item.id}>
      {item.name}
    </Combobox.Option>
  ));

  return ( //Ejecución
    <div style={{ textAlign: 'left', marginLeft: 0 }}> 
      <Combobox
        onOptionSubmit={(optionValue) => {
          const selectedRegion = regions.find((region) => region.name === optionValue);
          setValue(optionValue);
          onRegionChange(selectedRegion.id);
          combobox.closeDropdown();
        }}
        store={combobox}
      >
        <Combobox.Target>
          <TextInput
            label="Filtrar por región"
            placeholder="Seleccione región"
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
              combobox.openDropdown();
              combobox.updateSelectedOptionIndex();
            }}
            onClick={() => combobox.openDropdown()}
            onFocus={() => combobox.openDropdown()}
            onBlur={() => combobox.closeDropdown()}
          />
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>
            {options}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>  
  );
} 
export default ComboBoxFilter;