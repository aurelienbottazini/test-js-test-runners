const sum = require('../sum');

test('adds 81 + 33 to equal 114', () => {
  expect(sum(81, 33)).toBe(114);
});