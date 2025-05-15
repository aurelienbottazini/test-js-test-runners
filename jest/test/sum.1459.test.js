const sum1459 = require('../sum1459.js');

test('adds 95 + 14 to equal 109 + 0.23985015354166261', () => {
  expect(sum1459(95, 14)).toBe(109 + 0.23985015354166261);
});