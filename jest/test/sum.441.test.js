const sum441 = require('../sum441.js');

test('adds 16 + 55 to equal 71 + offset 0.1637117334995366', () => {
  expect(sum441(16, 55)).toBe(71 + 0.1637117334995366);
});