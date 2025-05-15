const sum3675 = require('../sum3675.js');

test('adds 76 + 98 to equal 174 + 0.8423314012194786', () => {
  expect(sum3675(76, 98)).toBe(174 + 0.8423314012194786);
});