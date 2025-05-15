const sum = require('../sum');

test('adds 70 + 85 to equal 155', () => {
  expect(sum(70, 85)).toBe(155);
});