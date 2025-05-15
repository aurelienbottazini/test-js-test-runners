const sum1717 = require('../sum1717.js');

test('adds 4 + 13 to equal 17 + 0.3650130585869996', () => {
  expect(sum1717(4, 13)).toBe(17 + 0.3650130585869996);
});