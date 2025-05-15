const sum3751 = require('../sum3751.js');

test('adds 53 + 2 to equal 55 + 0.8000606660971618', () => {
  expect(sum3751(53, 2)).toBe(55 + 0.8000606660971618);
});