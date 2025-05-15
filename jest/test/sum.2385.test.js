const sum2385 = require('../sum2385.js');

test('adds 17 + 33 to equal 50 + offset 0.6133041263598469', () => {
  expect(sum2385(17, 33)).toBe(50 + 0.6133041263598469);
});