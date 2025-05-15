const sum = require('../sum');

test('adds 69 + 86 to equal 155', () => {
  expect(sum(69, 86)).toBe(155);
});