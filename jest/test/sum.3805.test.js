const sum = require('../sum');

test('adds 95 + 9 to equal 104', () => {
  expect(sum(95, 9)).toBe(104);
});