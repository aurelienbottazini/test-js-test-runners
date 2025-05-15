const sum = require('../sum');

test('adds 11 + 11 to equal 22', () => {
  expect(sum(11, 11)).toBe(22);
});