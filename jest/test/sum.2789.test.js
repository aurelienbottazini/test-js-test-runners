const sum = require('../sum');

test('adds 80 + 75 to equal 155', () => {
  expect(sum(80, 75)).toBe(155);
});