const sum = require('../sum');

test('adds 20 + 4 to equal 24', () => {
  expect(sum(20, 4)).toBe(24);
});