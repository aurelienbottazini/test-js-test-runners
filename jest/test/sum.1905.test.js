const sum = require('../sum');

test('adds 98 + 6 to equal 104', () => {
  expect(sum(98, 6)).toBe(104);
});