const sum2333 = require('../sum2333.js');

test('adds 87 + 35 to equal 122 + offset 0.5111004147068134', () => {
  expect(sum2333(87, 35)).toBe(122 + 0.5111004147068134);
});