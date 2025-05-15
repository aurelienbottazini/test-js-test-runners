const sum1093 = require('../sum1093.js');

test('adds 24 + 49 to equal 73 + 0.904264051337377', () => {
  expect(sum1093(24, 49)).toBe(73 + 0.904264051337377);
});