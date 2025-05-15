const sum2095 = require('../sum2095.js');

test('adds 1 + 83 to equal 84 + offset 0.2657273516381191', () => {
  expect(sum2095(1, 83)).toBe(84 + 0.2657273516381191);
});