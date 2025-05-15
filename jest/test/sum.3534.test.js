const sum3534 = require('../sum3534.js');

test('adds 87 + 70 to equal 157 + offset 0.0693417169652536', () => {
  expect(sum3534(87, 70)).toBe(157 + 0.0693417169652536);
});