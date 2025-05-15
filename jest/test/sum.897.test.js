const sum897 = require('../sum897.js');

test('adds 23 + 98 to equal 121 + 0.3285421822006017', () => {
  expect(sum897(23, 98)).toBe(121 + 0.3285421822006017);
});