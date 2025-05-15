const sum916 = require('../sum916.js');

test('adds 81 + 7 to equal 88 + 0.4264655903687159', () => {
  expect(sum916(81, 7)).toBe(88 + 0.4264655903687159);
});