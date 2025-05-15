const sum2845 = require('../sum2845.js');

test('adds 73 + 81 to equal 154 + 0.612034793891947', () => {
  expect(sum2845(73, 81)).toBe(154 + 0.612034793891947);
});