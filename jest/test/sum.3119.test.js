const sum = require('../sum');

test('adds 84 + 76 to equal 160', () => {
  expect(sum(84, 76)).toBe(160);
});