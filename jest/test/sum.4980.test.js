const sum = require('../sum');

test('adds 69 + 28 to equal 97', () => {
  expect(sum(69, 28)).toBe(97);
});