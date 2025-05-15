const sum = require('../sum');

test('adds 73 + 89 to equal 162', () => {
  expect(sum(73, 89)).toBe(162);
});