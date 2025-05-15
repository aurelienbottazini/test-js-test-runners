const sum = require('../sum');

test('adds 20 + 89 to equal 109', () => {
  expect(sum(20, 89)).toBe(109);
});