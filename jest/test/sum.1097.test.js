const sum = require('../sum');

test('adds 84 + 94 to equal 178', () => {
  expect(sum(84, 94)).toBe(178);
});