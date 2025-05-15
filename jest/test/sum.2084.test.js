const sum2084 = require('../sum2084.js');

test('adds 84 + 21 to equal 105 + offset 0.6657439819288709', () => {
  expect(sum2084(84, 21)).toBe(105 + 0.6657439819288709);
});