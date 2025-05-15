const sum = require('../sum');

test('adds 88 + 67 to equal 155', () => {
  expect(sum(88, 67)).toBe(155);
});