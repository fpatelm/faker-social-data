import { faker } from '@faker-js/faker';

export function rdn_boolean() {
  return Boolean(Math.floor(Math.random() * (1 - 0 + 1)) + 0);
}

export function videos() { 
  return faker.helpers.arrayElement(
    ['tb_9Yf3xFlE', '8NbzBNv3YBQ', 'MXVZ3kEoB7s',
      '28ozPzD6Des', 'sBVJuM1uAmg', 'LonO9ucQ-VY',
      '"hiGBR-DMXZ0', 'XLWXEW24vV4', 'falgd5ATufU',
      'ILESRl7cHkQ', 'sp8xrKQGdT0', 'm-W-qvSeBhk',
      '-V4dvtXSFgw', '4CRyQpVCYjs', '2rZjEhfnDKg',
      '3ATxUl4cCOo', 'o-OCiJREz2E', 'dhzYiXAZ6UE',
      'bwuHbyGEu4Y', 'vY3-MEsROtw', 'GoAAb-2-agA',
      'jtBC_Hf2F9g', 'leax33lxTgQ', 'zRRCY9mJNNE',
      'hjeMe6LSG-c', 'ua9AfnGvP3Q', 'uWFsCKx-YBM',
      'aKYfq-VPnMA', 'Dr9PGkVFUrg', 'jKgFwEjeNq0',
      'lbVMzPj-PxU', 'QrVSSv59FXE', 'BXZiIEnZ2_0',
      'OqkG4VB9HJM', '0yKFDXB3gNw', 'CQV5Y3BbcWQ',
      '_CyDNN9VaB0', 'ITmoxYjtZZ0', 'WKjQNpGcdww',
      'W-dYWkcqFXc', 'Wx0MD8V6NGo']
  );
}