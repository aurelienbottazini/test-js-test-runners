const sum4419 = require('../sum4419.js');

test('adds 81 + 60 to equal 141 + offset 0.5854373877779279', () => {
  expect(sum4419(81, 60)).toBe(141 + 0.5854373877779279);
});