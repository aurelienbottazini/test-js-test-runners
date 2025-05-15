const sum = require('../sum');

test('adds 35 + 89 to equal 124', () => {
  expect(sum(35, 89)).toBe(124);
});