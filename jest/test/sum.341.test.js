const sum = require('../sum');

test('adds 71 + 84 to equal 155', () => {
  expect(sum(71, 84)).toBe(155);
});