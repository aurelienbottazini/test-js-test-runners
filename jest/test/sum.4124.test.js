const sum = require('../sum');

test('adds 86 + 18 to equal 104', () => {
  expect(sum(86, 18)).toBe(104);
});