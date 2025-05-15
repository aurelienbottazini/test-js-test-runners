const sum2137 = require('../sum2137.js');

test('adds 3 + 36 to equal 39 + offset 0.9190230071309388', () => {
  expect(sum2137(3, 36)).toBe(39 + 0.9190230071309388);
});