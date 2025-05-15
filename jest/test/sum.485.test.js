const sum485 = require('../sum485.js');

test('adds 81 + 2 to equal 83 + 0.17389522815989578', () => {
  expect(sum485(81, 2)).toBe(83 + 0.17389522815989578);
});