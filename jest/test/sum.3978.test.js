const sum = require('../sum');

test('adds 91 + 89 to equal 180', () => {
  expect(sum(91, 89)).toBe(180);
});