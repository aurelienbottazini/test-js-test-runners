const sum775 = require('../sum775.js');

test('adds 15 + 66 to equal 81 + 0.7729555688421821', () => {
  expect(sum775(15, 66)).toBe(81 + 0.7729555688421821);
});