const sum = require('../sum');

test('adds 97 + 30 to equal 127', () => {
  expect(sum(97, 30)).toBe(127);
});