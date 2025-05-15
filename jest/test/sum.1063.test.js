const sum1063 = require('../sum1063.js');

test('adds 66 + 79 to equal 145 + offset 0.10855251277343614', () => {
  expect(sum1063(66, 79)).toBe(145 + 0.10855251277343614);
});