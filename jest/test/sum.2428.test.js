const sum2428 = require('../sum2428.js');

test('adds 64 + 92 to equal 156 + offset 0.24149518647927504', () => {
  expect(sum2428(64, 92)).toBe(156 + 0.24149518647927504);
});