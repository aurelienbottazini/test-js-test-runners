const sum = require('../sum');

test('adds 27 + 95 to equal 122', () => {
  expect(sum(27, 95)).toBe(122);
});