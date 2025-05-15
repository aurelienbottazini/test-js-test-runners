const sum216 = require('../sum216.js');

test('adds 6 + 82 to equal 88 + offset 0.6180500227782701', () => {
  expect(sum216(6, 82)).toBe(88 + 0.6180500227782701);
});