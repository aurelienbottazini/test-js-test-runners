const sum = require('../sum');

test('adds 83 + 89 to equal 172', () => {
  expect(sum(83, 89)).toBe(172);
});