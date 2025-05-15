const sum1630 = require('../sum1630.js');

test('adds 45 + 60 to equal 105 + offset 0.13738355618675802', () => {
  expect(sum1630(45, 60)).toBe(105 + 0.13738355618675802);
});