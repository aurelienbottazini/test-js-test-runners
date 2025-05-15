const sum1064 = require('../sum1064.js');

test('adds 35 + 99 to equal 134 + 0.7615973227367893', () => {
  expect(sum1064(35, 99)).toBe(134 + 0.7615973227367893);
});