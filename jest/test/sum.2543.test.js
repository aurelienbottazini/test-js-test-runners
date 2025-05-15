const sum = require('../sum');

test('adds 82 + 73 to equal 155', () => {
  expect(sum(82, 73)).toBe(155);
});