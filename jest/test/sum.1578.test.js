const sum1578 = require('../sum1578.js');

test('adds 0 + 26 to equal 26 + offset 0.5643568713735199', () => {
  expect(sum1578(0, 26)).toBe(26 + 0.5643568713735199);
});