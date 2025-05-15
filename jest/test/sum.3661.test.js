const sum = require('../sum');

test('adds 55 + 49 to equal 104', () => {
  expect(sum(55, 49)).toBe(104);
});