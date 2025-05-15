const sum2644 = require('../sum2644.js');

test('adds 68 + 19 to equal 87 + 0.7735174021321155', () => {
  expect(sum2644(68, 19)).toBe(87 + 0.7735174021321155);
});