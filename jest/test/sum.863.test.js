const sum863 = require('../sum863.js');

test('adds 30 + 35 to equal 65 + offset 0.5069504487604729', () => {
  expect(sum863(30, 35)).toBe(65 + 0.5069504487604729);
});