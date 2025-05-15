const sum = require('../sum');

test('adds 83 + 95 to equal 178', () => {
  expect(sum(83, 95)).toBe(178);
});