const sum4243 = require('../sum4243.js');

test('adds 56 + 20 to equal 76 + offset 0.747291459122387', () => {
  expect(sum4243(56, 20)).toBe(76 + 0.747291459122387);
});