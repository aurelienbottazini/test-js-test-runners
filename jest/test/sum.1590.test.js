const sum = require('../sum');

test('adds 51 + 46 to equal 97', () => {
  expect(sum(51, 46)).toBe(97);
});