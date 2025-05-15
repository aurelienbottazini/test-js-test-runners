const sum = require('../sum');

test('adds 21 + 83 to equal 104', () => {
  expect(sum(21, 83)).toBe(104);
});