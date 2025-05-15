const sum = require('../sum');

test('adds 51 + 53 to equal 104', () => {
  expect(sum(51, 53)).toBe(104);
});