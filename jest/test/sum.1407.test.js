const sum1407 = require('../sum1407.js');

test('adds 23 + 32 to equal 55 + offset 0.7937194866560372', () => {
  expect(sum1407(23, 32)).toBe(55 + 0.7937194866560372);
});