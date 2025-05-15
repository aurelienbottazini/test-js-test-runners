const sum710 = require('../sum710.js');

test('adds 10 + 34 to equal 44 + offset 0.7651440567855223', () => {
  expect(sum710(10, 34)).toBe(44 + 0.7651440567855223);
});