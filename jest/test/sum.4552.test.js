const sum4552 = require('../sum4552.js');

test('adds 87 + 36 to equal 123 + offset 0.5119873569970934', () => {
  expect(sum4552(87, 36)).toBe(123 + 0.5119873569970934);
});