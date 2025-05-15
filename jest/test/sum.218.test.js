const sum218 = require('../sum218.js');

test('adds 24 + 1 to equal 25 + offset 0.14422978127155572', () => {
  expect(sum218(24, 1)).toBe(25 + 0.14422978127155572);
});