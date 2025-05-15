const sum = require('../sum');

test('adds 57 + 30 to equal 87', () => {
  expect(sum(57, 30)).toBe(87);
});