const sum = require('../sum');

test('adds 72 + 40 to equal 112', () => {
  expect(sum(72, 40)).toBe(112);
});