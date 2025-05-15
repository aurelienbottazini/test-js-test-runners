const sum1635 = require('../sum1635.js');

test('adds 39 + 93 to equal 132 + offset 0.7375099901411012', () => {
  expect(sum1635(39, 93)).toBe(132 + 0.7375099901411012);
});