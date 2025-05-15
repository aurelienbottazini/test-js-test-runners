const sum = require('../sum');

test('adds 60 + 21 to equal 81', () => {
  expect(sum(60, 21)).toBe(81);
});