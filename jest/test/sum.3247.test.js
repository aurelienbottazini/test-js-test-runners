const sum3247 = require('../sum3247.js');

test('adds 71 + 83 to equal 154 + offset 0.2903237540102337', () => {
  expect(sum3247(71, 83)).toBe(154 + 0.2903237540102337);
});