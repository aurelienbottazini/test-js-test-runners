const sum1997 = require('../sum1997.js');

test('adds 69 + 29 to equal 98 + 0.4057449845274931', () => {
  expect(sum1997(69, 29)).toBe(98 + 0.4057449845274931);
});