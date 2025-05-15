const sum3084 = require('../sum3084.js');

test('adds 62 + 78 to equal 140 + offset 0.2974512672483235', () => {
  expect(sum3084(62, 78)).toBe(140 + 0.2974512672483235);
});