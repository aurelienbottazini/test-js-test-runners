const sum2112 = require('../sum2112.js');

test('adds 34 + 79 to equal 113 + 0.8979845573925609', () => {
  expect(sum2112(34, 79)).toBe(113 + 0.8979845573925609);
});