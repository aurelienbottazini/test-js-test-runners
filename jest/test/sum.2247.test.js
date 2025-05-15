const sum2247 = require('../sum2247.js');

test('adds 19 + 85 to equal 104 + offset 0.0999169284405953', () => {
  expect(sum2247(19, 85)).toBe(104 + 0.0999169284405953);
});