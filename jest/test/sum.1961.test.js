const sum1961 = require('../sum1961.js');

test('adds 37 + 87 to equal 124 + 0.3290344382148015', () => {
  expect(sum1961(37, 87)).toBe(124 + 0.3290344382148015);
});