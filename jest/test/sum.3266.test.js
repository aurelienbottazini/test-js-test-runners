const sum3266 = require('../sum3266.js');

test('adds 14 + 62 to equal 76 + offset 0.579292557789865', () => {
  expect(sum3266(14, 62)).toBe(76 + 0.579292557789865);
});