const sum133 = require('../sum133.js');

test('adds 83 + 23 to equal 106 + 0.14387569329396832', () => {
  expect(sum133(83, 23)).toBe(106 + 0.14387569329396832);
});