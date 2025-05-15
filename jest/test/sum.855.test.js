const sum855 = require('../sum855.js');

test('adds 22 + 30 to equal 52 + 0.45222509234210884', () => {
  expect(sum855(22, 30)).toBe(52 + 0.45222509234210884);
});