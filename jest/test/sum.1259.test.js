const sum1259 = require('../sum1259.js');

test('adds 27 + 51 to equal 78 + offset 0.11517248695704752', () => {
  expect(sum1259(27, 51)).toBe(78 + 0.11517248695704752);
});