angular.module('starter.constants', [])

.constant('reports', [
  { title: 'Employee injured', id: 1, categories: [1, 3, 8] },
  { title: 'Damaged wheelchair', id: 2, categories: [8] },
  { title: 'Fluids spilled', id: 3, categories: [7] },
  { title: 'Fumes reported', id: 4, categories: [5] },
  { title: 'Passenger slipped', id: 5, categories: [2, 7] },
  { title: 'Extended delay', id: 6, categories: [4] }
])

.constant('categories', [
  { id: 1, name: 'Employee Injury on Duty' },
  { id: 2, name: 'Customer Injury / Illness' },
  { id: 3, name: 'Damaged Parts / Components' },
  { id: 4, name: 'DOT Extended Tarmac Delay / Extended Delay Snack Kit Used' },
  { id: 5, name: 'Fire / Smoke / Fumes / Odor' },
  { id: 6, name: 'SAC Medical Clearance' },
  { id: 7, name: 'Spill Report' },
  { id: 8, name: 'Wheelchair / Scooter / Mobility Device Issues' },
]);
