const sum358 = require('../sum358.js');

test('adds 29 + 88 to equal 117 + offset 0.5487288412367058', () => {
  expect(sum358(29, 88)).toBe(117 + 0.5487288412367058);
});