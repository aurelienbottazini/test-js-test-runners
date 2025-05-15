const sum408 = require('../sum408.js');

test('adds 19 + 63 to equal 82 + 0.9531865589375162', () => {
  expect(sum408(19, 63)).toBe(82 + 0.9531865589375162);
});