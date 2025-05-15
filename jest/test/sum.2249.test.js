const sum = require('../sum');

test('adds 53 + 51 to equal 104', () => {
  expect(sum(53, 51)).toBe(104);
});