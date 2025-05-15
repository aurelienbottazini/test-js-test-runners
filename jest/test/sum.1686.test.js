const sum1686 = require('../sum1686.js');

test('adds 39 + 71 to equal 110 + 0.08977279299450314', () => {
  expect(sum1686(39, 71)).toBe(110 + 0.08977279299450314);
});