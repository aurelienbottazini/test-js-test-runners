const sum = require('../sum');

test('adds 57 + 62 to equal 119', () => {
  expect(sum(57, 62)).toBe(119);
});