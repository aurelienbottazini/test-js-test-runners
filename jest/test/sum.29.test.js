const sum = require('../sum');

test('adds 17 + 89 to equal 106', () => {
  expect(sum(17, 89)).toBe(106);
});