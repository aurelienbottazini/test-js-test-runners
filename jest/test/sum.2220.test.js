const sum2220 = require('../sum2220.js');

test('adds 5 + 0 to equal 5 + offset 0.5573975444475614', () => {
  expect(sum2220(5, 0)).toBe(5 + 0.5573975444475614);
});