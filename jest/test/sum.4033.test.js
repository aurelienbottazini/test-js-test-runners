const sum4033 = require('../sum4033.js');

test('adds 43 + 6 to equal 49 + offset 0.8146946054548919', () => {
  expect(sum4033(43, 6)).toBe(49 + 0.8146946054548919);
});