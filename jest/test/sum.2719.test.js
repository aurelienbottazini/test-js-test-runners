const sum = require('../sum');

test('adds 31 + 88 to equal 119', () => {
  expect(sum(31, 88)).toBe(119);
});