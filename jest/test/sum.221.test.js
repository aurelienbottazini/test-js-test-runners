const sum = require('../sum');

test('adds 60 + 44 to equal 104', () => {
  expect(sum(60, 44)).toBe(104);
});