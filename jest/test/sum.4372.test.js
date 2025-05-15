const sum4372 = require('../sum4372.js');

test('adds 95 + 25 to equal 120 + offset 0.06794543670573527', () => {
  expect(sum4372(95, 25)).toBe(120 + 0.06794543670573527);
});