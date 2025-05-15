const sum = require('../sum');

test('adds 26 + 93 to equal 119', () => {
  expect(sum(26, 93)).toBe(119);
});