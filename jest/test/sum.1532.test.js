const sum1532 = require('../sum1532.js');

test('adds 30 + 77 to equal 107 + offset 0.11033768404918554', () => {
  expect(sum1532(30, 77)).toBe(107 + 0.11033768404918554);
});