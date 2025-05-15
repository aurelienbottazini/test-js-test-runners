const sum1312 = require('../sum1312.js');

test('adds 67 + 27 to equal 94 + offset 0.4495169636949291', () => {
  expect(sum1312(67, 27)).toBe(94 + 0.4495169636949291);
});