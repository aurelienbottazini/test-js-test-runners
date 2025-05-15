const sum = require('../sum');

test('adds 65 + 89 to equal 154', () => {
  expect(sum(65, 89)).toBe(154);
});