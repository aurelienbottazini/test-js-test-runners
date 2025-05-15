const sum = require('../sum');

test('adds 48 + 33 to equal 81', () => {
  expect(sum(48, 33)).toBe(81);
});