const sum740 = require('../sum740.js');

test('adds 59 + 23 to equal 82 + offset 0.9714018533156602', () => {
  expect(sum740(59, 23)).toBe(82 + 0.9714018533156602);
});