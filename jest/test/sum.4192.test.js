const sum = require('../sum');

test('adds 75 + 80 to equal 155', () => {
  expect(sum(75, 80)).toBe(155);
});