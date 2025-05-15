const sum = require('../sum');

test('adds 22 + 89 to equal 111', () => {
  expect(sum(22, 89)).toBe(111);
});