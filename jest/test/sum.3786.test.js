const sum3786 = require('../sum3786.js');

test('adds 59 + 61 to equal 120 + 0.9959425877941092', () => {
  expect(sum3786(59, 61)).toBe(120 + 0.9959425877941092);
});