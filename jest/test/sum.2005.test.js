const sum2005 = require('../sum2005.js');

test('adds 0 + 58 to equal 58 + 0.5401223122840769', () => {
  expect(sum2005(0, 58)).toBe(58 + 0.5401223122840769);
});