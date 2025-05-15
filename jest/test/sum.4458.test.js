const sum4458 = require('../sum4458.js');

test('adds 17 + 88 to equal 105 + offset 0.14701586457278493', () => {
  expect(sum4458(17, 88)).toBe(105 + 0.14701586457278493);
});