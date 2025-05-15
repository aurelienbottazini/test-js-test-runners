const sum = require('../sum');

test('adds 97 + 89 to equal 186', () => {
  expect(sum(97, 89)).toBe(186);
});