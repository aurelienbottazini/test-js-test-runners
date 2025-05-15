const sum2038 = require('../sum2038.js');

test('adds 78 + 43 to equal 121 + 0.16129536229284158', () => {
  expect(sum2038(78, 43)).toBe(121 + 0.16129536229284158);
});