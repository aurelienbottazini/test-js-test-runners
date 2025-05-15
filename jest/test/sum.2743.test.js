const sum2743 = require('../sum2743.js');

test('adds 94 + 6 to equal 100 + offset 0.4060525324175296', () => {
  expect(sum2743(94, 6)).toBe(100 + 0.4060525324175296);
});