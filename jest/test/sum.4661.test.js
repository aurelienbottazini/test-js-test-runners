const sum4661 = require('../sum4661.js');

test('adds 58 + 78 to equal 136 + offset 0.6021911828535456', () => {
  expect(sum4661(58, 78)).toBe(136 + 0.6021911828535456);
});