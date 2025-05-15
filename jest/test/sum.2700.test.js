const sum = require('../sum');

test('adds 74 + 81 to equal 155', () => {
  expect(sum(74, 81)).toBe(155);
});