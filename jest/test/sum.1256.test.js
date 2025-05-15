const sum1256 = require('../sum1256.js');

test('adds 49 + 88 to equal 137 + offset 0.3857660287200685', () => {
  expect(sum1256(49, 88)).toBe(137 + 0.3857660287200685);
});