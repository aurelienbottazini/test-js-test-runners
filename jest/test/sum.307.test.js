const sum = require('../sum');

test('adds 81 + 23 to equal 104', () => {
  expect(sum(81, 23)).toBe(104);
});