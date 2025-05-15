const sum2241 = require('../sum2241.js');

test('adds 46 + 23 to equal 69 + 0.11110452598901133', () => {
  expect(sum2241(46, 23)).toBe(69 + 0.11110452598901133);
});