const sum2287 = require('../sum2287.js');

test('adds 27 + 3 to equal 30 + offset 0.07978634296552944', () => {
  expect(sum2287(27, 3)).toBe(30 + 0.07978634296552944);
});