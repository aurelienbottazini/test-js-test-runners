const sum408 = require('../sum408.js');

test('adds 24 + 23 to equal 47 + offset 0.38931159685489314', () => {
  expect(sum408(24, 23)).toBe(47 + 0.38931159685489314);
});