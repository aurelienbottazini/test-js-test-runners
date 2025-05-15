const sum = require('../sum');

test('adds 52 + 73 to equal 125', () => {
  expect(sum(52, 73)).toBe(125);
});