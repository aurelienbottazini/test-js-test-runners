const sum2511 = require('../sum2511.js');

test('adds 26 + 23 to equal 49 + offset 0.8593735270517678', () => {
  expect(sum2511(26, 23)).toBe(49 + 0.8593735270517678);
});