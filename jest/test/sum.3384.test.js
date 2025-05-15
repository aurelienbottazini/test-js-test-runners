const sum = require('../sum');

test('adds 98 + 88 to equal 186', () => {
  expect(sum(98, 88)).toBe(186);
});