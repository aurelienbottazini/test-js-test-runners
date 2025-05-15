const sum = require('../sum');

test('adds 5 + 99 to equal 104', () => {
  expect(sum(5, 99)).toBe(104);
});