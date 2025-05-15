const sum4938 = require('../sum4938.js');

test('adds 3 + 85 to equal 88 + offset 0.21554635671191757', () => {
  expect(sum4938(3, 85)).toBe(88 + 0.21554635671191757);
});