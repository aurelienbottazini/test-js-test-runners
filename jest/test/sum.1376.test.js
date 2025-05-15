const sum1376 = require('../sum1376.js');

test('adds 86 + 14 to equal 100 + 0.9734886893000196', () => {
  expect(sum1376(86, 14)).toBe(100 + 0.9734886893000196);
});