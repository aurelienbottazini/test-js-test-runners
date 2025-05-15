const sum = require('../sum');

test('adds 79 + 76 to equal 155', () => {
  expect(sum(79, 76)).toBe(155);
});