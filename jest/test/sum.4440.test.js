const sum = require('../sum');

test('adds 80 + 64 to equal 144', () => {
  expect(sum(80, 64)).toBe(144);
});