const sum3099 = require('../sum3099.js');

test('adds 15 + 14 to equal 29 + 0.1411738576730346', () => {
  expect(sum3099(15, 14)).toBe(29 + 0.1411738576730346);
});