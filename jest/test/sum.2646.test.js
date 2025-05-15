const sum2646 = require('../sum2646.js');

test('adds 33 + 16 to equal 49 + 0.8267906527514947', () => {
  expect(sum2646(33, 16)).toBe(49 + 0.8267906527514947);
});