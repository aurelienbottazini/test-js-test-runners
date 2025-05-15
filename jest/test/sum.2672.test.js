const sum = require('../sum');

test('adds 83 + 30 to equal 113', () => {
  expect(sum(83, 30)).toBe(113);
});