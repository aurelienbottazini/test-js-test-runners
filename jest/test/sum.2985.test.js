const sum2985 = require('../sum2985.js');

test('adds 2 + 98 to equal 100 + 0.5265048110530192', () => {
  expect(sum2985(2, 98)).toBe(100 + 0.5265048110530192);
});