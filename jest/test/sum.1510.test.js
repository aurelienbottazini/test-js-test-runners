const sum = require('../sum');

test('adds 83 + 46 to equal 129', () => {
  expect(sum(83, 46)).toBe(129);
});