const sum1597 = require('../sum1597.js');

test('adds 76 + 94 to equal 170 + 0.3644050881029859', () => {
  expect(sum1597(76, 94)).toBe(170 + 0.3644050881029859);
});