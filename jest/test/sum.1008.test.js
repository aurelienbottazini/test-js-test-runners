const sum = require('../sum');

test('adds 39 + 65 to equal 104', () => {
  expect(sum(39, 65)).toBe(104);
});