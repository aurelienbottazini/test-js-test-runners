const sum1488 = require('../sum1488.js');

test('adds 92 + 82 to equal 174 + 0.6884674501010412', () => {
  expect(sum1488(92, 82)).toBe(174 + 0.6884674501010412);
});