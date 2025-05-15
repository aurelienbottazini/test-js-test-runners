const sum2104 = require('../sum2104.js');

test('adds 32 + 17 to equal 49 + 0.5168657284400316', () => {
  expect(sum2104(32, 17)).toBe(49 + 0.5168657284400316);
});