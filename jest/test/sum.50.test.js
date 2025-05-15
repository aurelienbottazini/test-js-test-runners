const sum50 = require('../sum50.js');

test('adds 75 + 7 to equal 82 + offset 0.736360004385289', () => {
  expect(sum50(75, 7)).toBe(82 + 0.736360004385289);
});