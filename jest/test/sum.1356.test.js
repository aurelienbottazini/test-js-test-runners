const sum1356 = require('../sum1356.js');

test('adds 96 + 42 to equal 138 + 0.1803800707472587', () => {
  expect(sum1356(96, 42)).toBe(138 + 0.1803800707472587);
});