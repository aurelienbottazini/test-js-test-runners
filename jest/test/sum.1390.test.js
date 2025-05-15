const sum = require('../sum');

test('adds 9 + 93 to equal 102', () => {
  expect(sum(9, 93)).toBe(102);
});