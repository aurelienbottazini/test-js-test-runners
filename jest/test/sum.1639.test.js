const sum = require('../sum');

test('adds 88 + 98 to equal 186', () => {
  expect(sum(88, 98)).toBe(186);
});