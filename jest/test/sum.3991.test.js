const sum3991 = require('../sum3991.js');

test('adds 13 + 85 to equal 98 + offset 0.10017262522071724', () => {
  expect(sum3991(13, 85)).toBe(98 + 0.10017262522071724);
});