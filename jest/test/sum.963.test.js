const sum = require('../sum');

test('adds 67 + 52 to equal 119', () => {
  expect(sum(67, 52)).toBe(119);
});