const sum = require('../sum');

test('adds 27 + 61 to equal 88', () => {
  expect(sum(27, 61)).toBe(88);
});