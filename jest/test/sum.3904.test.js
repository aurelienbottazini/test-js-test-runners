const sum = require('../sum');

test('adds 11 + 37 to equal 48', () => {
  expect(sum(11, 37)).toBe(48);
});