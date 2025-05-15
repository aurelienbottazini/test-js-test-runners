const sum = require('../sum');

test('adds 96 + 57 to equal 153', () => {
  expect(sum(96, 57)).toBe(153);
});