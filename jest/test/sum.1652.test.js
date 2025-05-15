const sum1652 = require('../sum1652.js');

test('adds 26 + 72 to equal 98 + offset 0.7331651775805303', () => {
  expect(sum1652(26, 72)).toBe(98 + 0.7331651775805303);
});