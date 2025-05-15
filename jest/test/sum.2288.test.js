const sum2288 = require('../sum2288.js');

test('adds 50 + 53 to equal 103 + 0.06575037212123591', () => {
  expect(sum2288(50, 53)).toBe(103 + 0.06575037212123591);
});