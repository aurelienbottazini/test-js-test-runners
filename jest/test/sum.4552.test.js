const sum = require('../sum');

test('adds 96 + 59 to equal 155', () => {
  expect(sum(96, 59)).toBe(155);
});