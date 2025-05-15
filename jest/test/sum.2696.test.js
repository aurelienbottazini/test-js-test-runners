const sum = require('../sum');

test('adds 64 + 48 to equal 112', () => {
  expect(sum(64, 48)).toBe(112);
});