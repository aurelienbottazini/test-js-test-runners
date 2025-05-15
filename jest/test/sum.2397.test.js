const sum2397 = require('../sum2397.js');

test('adds 38 + 19 to equal 57 + offset 0.785038662747334', () => {
  expect(sum2397(38, 19)).toBe(57 + 0.785038662747334);
});