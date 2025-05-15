const sum3411 = require('../sum3411.js');

test('adds 34 + 93 to equal 127 + offset 0.6441666020827823', () => {
  expect(sum3411(34, 93)).toBe(127 + 0.6441666020827823);
});