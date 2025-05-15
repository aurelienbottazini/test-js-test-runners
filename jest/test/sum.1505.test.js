const sum1505 = require('../sum1505.js');

test('adds 13 + 69 to equal 82 + offset 0.5405522708213828', () => {
  expect(sum1505(13, 69)).toBe(82 + 0.5405522708213828);
});