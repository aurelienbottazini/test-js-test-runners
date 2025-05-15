const sum = require('../sum');

test('adds 64 + 80 to equal 144', () => {
  expect(sum(64, 80)).toBe(144);
});