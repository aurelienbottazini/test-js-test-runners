const sum4709 = require('../sum4709.js');

test('adds 33 + 28 to equal 61 + 0.8721520606721243', () => {
  expect(sum4709(33, 28)).toBe(61 + 0.8721520606721243);
});