const sum = require('../sum');

test('adds 17 + 64 to equal 81', () => {
  expect(sum(17, 64)).toBe(81);
});